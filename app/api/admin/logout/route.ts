import { NextResponse } from "next/server"

const expiredCookie = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  expires: new Date(0)
}

export async function POST() {
  const response = NextResponse.json({ success: true })

  response.cookies.set("sb-access-token", "", expiredCookie)
  response.cookies.set("sb-refresh-token", "", expiredCookie)

  return response
}
