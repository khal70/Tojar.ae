// Sample seed.js
// Run with: node scripts/seed.js

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

async function seed() {
  const categories = [
    { name: 'Electronics' },
    { name: 'Fashion' },
    { name: 'Home' }
  ]

  for (const category of categories) {
    await supabase.from('categories').insert([category])
  }

  const products = [
    {
      name: 'Smartphone',
      description: 'Latest model smartphone',
      price: 599,
      image: '/images/sample.png',
      category_id: 1
    },
    {
      name: 'T-Shirt',
      description: 'Cool fashion T-shirt',
      price: 29,
      image: '/images/sample.png',
      category_id: 2
    }
  ]

  for (const product of products) {
    await supabase.from('products').insert([product])
  }

  console.log('Seed completed.')
}

seed()
