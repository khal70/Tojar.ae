'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo-green.png'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <Link href="/" className="flex items-center space-x-2 mb-6">
          <Image src={Logo} alt="Tojar Logo" width={28} height={28} />
          <span className="text-lg font-bold">Tojar Admin</span>
        </Link>
        <nav className="space-y-2">
          <Link href="/admin/dashboard" className="block hover:underline">Dashboard</Link>
          <Link href="/admin/products" className="block hover:underline">Products</Link>
          <Link href="/admin/categories" className="block hover:underline">Categories</Link>
          <Link href="/admin/promotions" className="block hover:underline">Promotions</Link>
          <Link href="/admin/banners" className="block hover:underline">Banners</Link>
          <Link href="/admin/faqs" className="block hover:underline">FAQs</Link>
          <Link href="/admin/orders" className="block hover:underline">Orders</Link>
          <Link href="/admin/customers" className="block hover:underline">Customers</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  )
}
