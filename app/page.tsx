'use client'
import { useEffect, useState } from "react"
import StoreLayout from "@/components/ui/StoreLayout"
import Link from "next/link"

export default function HomePage() {
  const [categories, setCategories] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    // Mock data for local testing
    setCategories([
      { id: 1, name: "Clothing" },
      { id: 2, name: "Electronics" }
    ])
    setProducts([
      { id: 1, name: "Sample Product 1", price: 29.99, image: "/images/sample.png" },
      { id: 2, name: "Sample Product 2", price: 49.99, image: "/images/sample.png" }
    ])
  }, [])

  return (
    <StoreLayout>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-200 h-24 flex items-center justify-center text-sm">
              {category.name}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="border p-2 rounded text-center">
                <img src={product.image} alt={product.name} className="h-24 w-full object-cover mb-2" />
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </StoreLayout>
  )
}
