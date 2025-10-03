"use client";
export default function OrdersView() {
    return (
        <>
            <div dangerouslySetInnerHTML={ __html: `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<link crossorigin="" href="https://fonts.gstatic.com/" rel="preconnect"/>
<link as="style" href="https://fonts.googleapis.com/css2?display=swap&amp;family=Manrope%3Awght%40400%3B500%3B700%3B800&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900" onload="this.rel='stylesheet'" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#1193d4",
              "background-light": "#f6f7f8",
              "background-dark": "#101c22",
            },
            fontFamily: {
              "display": ["Manrope"]
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
          },
        },
      }
    </script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<title>Tojar Order Details</title>
<link href="data:image/x-icon;base64," rel="icon" type="image/x-icon"/>
</head>
<body class="font-display bg-background-light dark:bg-background-dark">
<div class="flex h-full min-h-screen w-full flex-col">
<header class="flex items-center justify-between whitespace-nowrap border-b border-background-light/10 dark:border-background-dark/10 bg-background-light dark:bg-background-dark px-6 py-3 shadow-sm">
<div class="flex items-center gap-4 text-gray-800 dark:text-white">
<div class="size-6 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
</svg>
</div>
<h2 class="text-lg font-bold">Tojar</h2>
</div>
<nav class="hidden md:flex items-center gap-6">
<a class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="text-sm font-medium text-primary" href="#">Orders</a>
<a class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Products</a>
<a class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Customers</a>
<a class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Marketing</a>
<a class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Analytics</a>
</nav>
<div class="flex items-center gap-4">
<button class="relative rounded-full p-2 text-gray-500 dark:text-gray-400 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary">
<span class="material-symbols-outlined"> notifications </span>
<span class="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-xs text-white"></span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4OVEEer_hPQZ5zPhciTlveA-B9dC-AdSs6Cm-txZXm7XLWzMUIcFNwNrncyl3kJ8MumwxiNpIDjGoZd8fYnLFtAB0vJYSRUXthZs4KYV4L71CBbRh8Azmlom9RB7R__6V2PITS3d3U2SsjgqhlkzgnAI7J0g7noQQHq4EvrrD8ZwEe8KKy16utc6jZXXzvnx-BXPF-j6JTv2N0Qv-z7KfC1UwEXQG3pQcgwvsXwTXAYZkzchnBtlnupYMMAJNwbkaFdwqF4aqKUQ");'></div>
</div>
</header>
<main class="flex-1 px-4 py-8 sm:px-6 lg:px-8">
<div class="max-w-4xl mx-auto">
<div class="mb-6">
<nav aria-label="Breadcrumb" class="flex items-center text-sm">
<ol class="flex items-center space-x-2">
<li>
<a class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Orders</a>
</li>
<li>
<span class="material-symbols-outlined text-sm text-gray-400 dark:text-gray-500">chevron_right</span>
</li>
<li>
<span class="font-medium text-gray-700 dark:text-gray-200">Order #12345</span>
</li>
</ol>
</nav>
</div>
<div class="mb-8">
<h1 class="text-3xl font-bold text-gray-900 dark:text-white">Order #12345</h1>
<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Placed on January 15, 2024 at 10:30 AM</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div class="lg:col-span-2 space-y-8">
<div class="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-sm">
<div class="p-6">
<h3 class="text-lg font-medium text-gray-900 dark:text-white">Order Summary</h3>
<div class="mt-4 flow-root">
<div class="-mx-6 -my-4 overflow-x-auto">
<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
<thead>
<tr>
<th class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-0" scope="col">Product</th>
<th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white" scope="col">Quantity</th>
<th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white" scope="col">Price</th>
<th class="relative py-3.5 pl-3 pr-4 sm:pr-0 text-right text-sm font-semibold text-gray-900 dark:text-white" scope="col">Total</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200 dark:divide-gray-800">
<tr>
<td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-0">Luxury Oud Perfume</td>
<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">1</td>
<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">AED 250.00</td>
<td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm text-gray-500 dark:text-gray-400 sm:pr-0">AED 250.00</td>
</tr>
<tr>
<td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-0">Premium Dates Gift Box</td>
<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">2</td>
<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">AED 100.00</td>
<td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm text-gray-500 dark:text-gray-400 sm:pr-0">AED 200.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
<div class="flex justify-between text-sm text-gray-600 dark:text-gray-300">
<p>Subtotal</p>
<p class="font-medium text-gray-900 dark:text-white">AED 450.00</p>
</div>
<div class="flex justify-between text-sm text-gray-600 dark:text-gray-300">
<p>Shipping</p>
<p class="font-medium text-gray-900 dark:text-white">AED 20.00</p>
</div>
<div class="flex justify-between text-base font-medium text-gray-900 dark:text-white">
<p>Total</p>
<p>AED 470.00</p>
</div>
</div>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-sm p-6">
<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Customer Information</h3>
<dl class="space-y-4 text-sm">
<div>
<dt class="font-medium text-gray-500 dark:text-gray-400">Name</dt>
<dd class="mt-1 text-gray-900 dark:text-gray-200">Fatima Al Maktoum</dd>
</div>
<div>
<dt class="font-medium text-gray-500 dark:text-gray-400">Email</dt>
<dd class="mt-1 text-gray-900 dark:text-gray-200">fatima.almaktoum@email.com</dd>
</div>
<div>
<dt class="font-medium text-gray-500 dark:text-gray-400">Phone</dt>
<dd class="mt-1 text-gray-900 dark:text-gray-200">+971 50 123 4567</dd>
</div>
</dl>
</div>
<div class="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-sm p-6">
<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Shipping Address</h3>
<address class="not-italic space-y-4 text-sm">
<p class="text-gray-900 dark:text-gray-200">Villa 12, Al Safa 2<br/>Dubai, 12345<br/>United Arab Emirates</p>
</address>
</div>
</div>
<div class="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-sm p-6">
<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Payment Information</h3>
<dl class="space-y-4 text-sm">
<div>
<dt class="font-medium text-gray-500 dark:text-gray-400">Payment Method</dt>
<dd class="mt-1 text-gray-900 dark:text-gray-200">Credit Card</dd>
</div>
<div>
<dt class="font-medium text-gray-500 dark:text-gray-400">Transaction ID</dt>
<dd class="mt-1 text-gray-900 dark:text-gray-200">TXN123456789</dd>
</div>
</dl>
</div>
</div>
<div class="lg:col-span-1 space-y-8">
<div class="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-sm p-6">
<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Order Status</h3>
<div class="space-y-4">
<label class="sr-only" for="order-status">Order Status</label>
<select class="w-full rounded border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-200 focus:ring-primary focus:border-primary" id="order-status" name="order-status">
<option>Processing</option>
<option selected="">Shipped</option>
<option>Delivered</option>
<option>Cancelled</option>
</select>
<button class="w-full flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary" type="button">
                    Update Status
                  </button>
</div>
</div>
<div class="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-sm p-6">
<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Order History</h3>
<ul class="space-y-6" role="list">
<li class="relative flex gap-x-4">
<div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
<div class="w-px bg-gray-200 dark:bg-gray-700"></div>
</div>
<div class="relative flex h-6 w-6 flex-none items-center justify-center bg-background-light dark:bg-background-dark/50">
<div class="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600 ring-1 ring-gray-300 dark:ring-gray-600"></div>
</div>
<p class="flex-auto py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-400">Order Shipped</p>
<time class="flex-none py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-400" datetime="2024-01-16T09:00">Jan 16, 9:00 AM</time>
</li>
<li class="relative flex gap-x-4">
<div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
<div class="w-px bg-gray-200 dark:bg-gray-700"></div>
</div>
<div class="relative flex h-6 w-6 flex-none items-center justify-center bg-background-light dark:bg-background-dark/50">
<div class="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600 ring-1 ring-gray-300 dark:ring-gray-600"></div>
</div>
<p class="flex-auto py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-400">Order Processed</p>
<time class="flex-none py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-400" datetime="2024-01-15T11:00">Jan 15, 11:00 AM</time>
</li>
<li class="relative flex gap-x-4">
<div class="relative flex h-6 w-6 flex-none items-center justify-center bg-background-light dark:bg-background-dark/50">
<div class="h-1.5 w-1.5 rounded-full bg-primary ring-1 ring-primary"></div>
</div>
<p class="flex-auto py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-400">Order Placed</p>
<time class="flex-none py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-400" datetime="2024-01-15T10:30">Jan 15, 10:30 AM</time>
</li>
</ul>
</div>
<div class="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-sm p-6">
<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Actions</h3>
<div class="space-y-3">
<button class="w-full flex items-center justify-center gap-2 rounded bg-primary/10 dark:bg-primary/20 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 dark:hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary" type="button">
<span class="material-symbols-outlined text-base">print</span>
                    Print Invoice
                  </button>
<button class="w-full flex items-center justify-center gap-2 rounded bg-red-100 dark:bg-red-900/30 px-4 py-2 text-sm font-medium text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-red-500" type="button">
<span class="material-symbols-outlined text-base">undo</span>
                    Refund
                  </button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

</body></html>` } />
        </>
    );
}