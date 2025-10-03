'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import StoreLayout from '@/components/ui/StoreLayout'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState<any>(null)
  const [reviews, setReviews] = useState<any[]>([])
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await supabase.from('products').select('*').eq('id', slug).single()
      if (data) setProduct(data)
    }
    const fetchReviews = async () => {
      const { data } = await supabase.from('reviews').select('*').eq('product_id', slug).order('created_at', { ascending: false })
      if (data) setReviews(data)
    }
    if (slug) {
      fetchProduct()
      fetchReviews()
    }
  }, [slug, submitted])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { error } = await supabase.from('reviews').insert([{ product_id: slug, rating, comment }])
    if (!error) {
      setSubmitted(true)
      setRating(5)
      setComment('')
    }
  }

  if (!product) return <p>Loading...</p>

  return (
    <StoreLayout>
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover mb-4" />
      <p>{product.description}</p>
      <p className="text-xl mt-4 mb-4">${product.price}</p>

      <form onSubmit={handleSubmit} className="mb-6">
        <h2 className="text-lg font-semibold">Leave a Review</h2>
        <label className="block mt-2">Rating:
          <select value={rating} onChange={e => setRating(Number(e.target.value))} className="ml-2 border px-2 py-1">
            {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          className="block w-full border mt-2 p-2"
          placeholder="Write your review"
        />
        <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>

      <div>
        <h2 className="text-lg font-semibold mb-2">Reviews</h2>
        {reviews.map((r, i) => (
          <div key={i} className="border-b py-2">
            <p>⭐ {r.rating}</p>
            <p className="text-sm text-gray-700">{r.comment}</p>
          </div>
        ))}
      </div>
    </StoreLayout>
  )
}
