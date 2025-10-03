'use client'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import AdminLayout from '@/components/ui/AdminLayout'
import { supabase } from '@/lib/supabase'

export default function PromotionsPage() {
  const [name, setName] = useState('')
  const [discount, setDiscount] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.from('promotions').insert([{ name, discount_percent: +discount }])
    if (error) {
      setMessage('Error saving promotion')
    } else {
      setMessage('Promotion saved!')
      setName('')
      setDiscount('')
    }
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Manage Promotions</h1>
      <Card>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input label="Promotion Name" name="name" value={name} onChange={e => setName(e.target.value)} />
          <Input label="Discount (%)" name="discount" type="number" value={discount} onChange={e => setDiscount(e.target.value)} />
          <Button type="submit">Save Promotion</Button>
          {message && <p className="mt-2 text-sm">{message}</p>}
        </form>
      </Card>
    </AdminLayout>
  )
}
