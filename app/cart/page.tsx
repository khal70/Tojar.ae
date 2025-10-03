'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function CartPage() {
  const [products, setProducts] = useState<any[]>([])
  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase.from('products').select('*')
      setProducts(data || [])
    }
    fetchProducts()

    const storedCart = localStorage.getItem('tojar-cart')
    if (storedCart) setCart(JSON.parse(storedCart))
  }, [])

  useEffect(() => {
    localStorage.setItem('tojar-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: any) => {
    const exists = cart.find((i) => i.id === product.id)
    if (exists) {
      setCart(cart.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const checkout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartItems: cart })
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <p>{item.name} x {item.quantity}</p>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}
          <button
            onClick={checkout}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Checkout
          </button>
        </>
      )}
    </main>
  )
}
