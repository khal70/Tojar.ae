import { NextResponse } from "next/server"
import { createClient, type SupabaseClient } from "@supabase/supabase-js"

import { getSupabaseAuthConfig } from "@/lib/supabase-server"

let cachedClient: SupabaseClient | null | undefined

function getSupabaseAuthClient(): SupabaseClient | null {
  if (cachedClient !== undefined) {
    return cachedClient
  }

  const config = getSupabaseAuthConfig()

  if (!config) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "Supabase authentication environment variables are missing or still use placeholder values. Admin login is disabled."
      )
    }

    cachedClient = null
    return cachedClient
  }

  cachedClient = createClient(config.supabaseUrl, config.anonKey, {
    auth: { persistSession: false },
  })

  return cachedClient
}

const ONE_HOUR = 60 * 60
const THIRTY_DAYS = 60 * 60 * 24 * 30

export async function POST(request: Request) {
  const supabase = getSupabaseAuthClient()

  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase authentication is not configured." },
      { status: 500 }
    )
  }

  const { email, password } = await request.json().catch(() => ({ email: null, password: null }))

  if (typeof email !== "string" || typeof password !== "string") {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 }
    )
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error || !data.session) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      )
    }

    const response = NextResponse.json({ success: true })
    const secure = process.env.NODE_ENV === "production"

    response.cookies.set("sb-access-token", data.session.access_token, {
      httpOnly: true,
      sameSite: "lax",
      secure,
      path: "/",
      maxAge: data.session.expires_in ?? ONE_HOUR,
    })

    response.cookies.set("sb-refresh-token", data.session.refresh_token, {
      httpOnly: true,
      sameSite: "lax",
      secure,
      path: "/",
      maxAge: THIRTY_DAYS,
    })

    return response
  } catch (signInError) {
    console.error("Failed to complete Supabase admin sign-in", signInError)
    return NextResponse.json(
      { error: "Unable to sign in right now. Please try again." },
      { status: 500 }
    )
  }
}
