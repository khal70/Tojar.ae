import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and anon key are required for admin login.")
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false }
})

const ONE_HOUR = 60 * 60
const THIRTY_DAYS = 60 * 60 * 24 * 30

export async function POST(request: Request) {
  const { email, password } = await request.json().catch(() => ({ email: null, password: null }))

  if (typeof email !== "string" || typeof password !== "string") {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 }
    )
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
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
    maxAge: data.session.expires_in ?? ONE_HOUR
  })

  response.cookies.set("sb-refresh-token", data.session.refresh_token, {
    httpOnly: true,
    sameSite: "lax",
    secure,
    path: "/",
    maxAge: THIRTY_DAYS
  })

  return response
}
