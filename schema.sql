-- Categories
create table categories (
  id serial primary key,
  name text not null
);

-- Products
create table products (
  id serial primary key,
  name text not null,
  description text,
  price numeric not null,
  image text,
  category_id integer references categories(id)
);

-- Users (Auth handled by Supabase)
create table users (
  id uuid primary key,
  email text unique not null,
  created_at timestamp default current_timestamp
);

-- Orders
create table orders (
  id serial primary key,
  user_id uuid references users(id),
  total numeric,
  status text default 'pending',
  created_at timestamp default current_timestamp
);

-- Order Items
create table order_items (
  id serial primary key,
  order_id integer references orders(id),
  product_id integer references products(id),
  quantity integer,
  price numeric
);

-- Promotions
create table promotions (
  id serial primary key,
  name text,
  discount_percent numeric,
  active boolean default true
);

-- Banners
create table banners (
  id serial primary key,
  image text,
  link text,
  active boolean default true
);

-- FAQs
create table faqs (
  id serial primary key,
  question text,
  answer text
);


-- Product Reviews
create table reviews (
  id serial primary key,
  product_id integer references products(id),
  user_id uuid references users(id),
  rating integer check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamp default current_timestamp
);
