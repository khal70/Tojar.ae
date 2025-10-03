import { config } from "dotenv"
import { createClient } from "@supabase/supabase-js"

// Load .env.local explicitly
config({ path: ".env.local" })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("❌ Missing Supabase credentials. Check .env.local")
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function seed() {
  console.log("🌱 Starting seed...")

  // Clear old data for clean demo
  await supabase.from("orders").delete().neq("id", 0)
  await supabase.from("products").delete().neq("id", 0)
  await supabase.from("categories").delete().neq("id", 0)
  await supabase.from("banners").delete().neq("id", 0)
  await supabase.from("promotions").delete().neq("id", 0)
  await supabase.from("faqs").delete().neq("id", 0)

  // Categories
  const { data: catData } = await supabase.from("categories").insert([
    { id: 1, name: "Clothing" },
    { id: 2, name: "Electronics" },
    { id: 3, name: "Home & Kitchen" },
  ]).select()

  console.log("✅ Categories:", catData?.length)

  // Products
  const { data: prodData } = await supabase.from("products").insert([
    { id: 1, name: "Green T-Shirt", price: 19.99, image: "/images/sample.png", category_id: 1 },
    { id: 2, name: "Wireless Earbuds", price: 59.99, image: "/images/sample.png", category_id: 2 },
    { id: 3, name: "Coffee Maker", price: 89.99, image: "/images/sample.png", category_id: 3 },
  ]).select()

  console.log("✅ Products:", prodData?.length)

  // Banners
  const { data: bannerData } = await supabase.from("banners").insert([
    { id: 1, title: "Big Sale", image: "/images/sample.png", link: "/" },
    { id: 2, title: "New Arrivals", image: "/images/sample.png", link: "/" },
  ]).select()

  console.log("✅ Banners:", bannerData?.length)

  // Promotions
  const { data: promoData } = await supabase.from("promotions").insert([
    { id: 1, title: "10% Off Clothing", discount: 10, active: true },
    { id: 2, title: "Free Shipping over $50", discount: 0, active: true },
  ]).select()

  console.log("✅ Promotions:", promoData?.length)

  // FAQs
  const { data: faqData } = await supabase.from("faqs").insert([
    { id: 1, question: "How do I return an item?", answer: "You can return items within 30 days." },
    { id: 2, question: "Do you offer international shipping?", answer: "Yes, we ship worldwide." },
    { id: 3, question: "What payment methods are accepted?", answer: "We accept credit cards, PayPal, and Stripe." },
  ]).select()

  console.log("✅ FAQs:", faqData?.length)

  // Test Order
  const { data: orderData } = await supabase.from("orders").insert([
    {
      id: 1,
      user_email: "customer@example.com",
      status: "paid",
      total: 59.99,
      items: JSON.stringify([
        { product_id: 2, name: "Wireless Earbuds", price: 59.99, qty: 1 }
      ])
    }
  ]).select()

  console.log("✅ Orders:", orderData?.length)

  console.log("🎉 Demo data seeding complete!")
}

seed().then(() => process.exit(0))
