import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tojar",
  description: "Fullstack ecommerce store"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
