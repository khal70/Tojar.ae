'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo-green.png' // Assume we store it here

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="Tojar Logo" width={32} height={32} />
            <span className="text-xl font-bold text-green-700">Tojar</span>
          </Link>
          <nav className="space-x-4">
            <Link href="/search">Search</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/auth/login">Login</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-4">{children}</main>
    </>
  )
}
