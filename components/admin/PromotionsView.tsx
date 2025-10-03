"use client";
export default function PromotionsView() {
    return (
        <>
            <div dangerouslySetInnerHTML={ __html: `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<link crossorigin="" href="https://fonts.gstatic.com/" rel="preconnect"/>
<link as="style" href="https://fonts.googleapis.com/css2?display=swap&amp;family=Manrope%3Awght%40400%3B500%3B700%3B800" onload="this.rel='stylesheet'" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#1193d4",
              "background-light": "#f6f7f8",
              "background-dark": "#101c22",
            },
            fontFamily: {
              display: ["Manrope"],
            },
            borderRadius: {
              DEFAULT: "0.25rem",
              lg: "0.5rem",
              xl: "0.75rem",
              full: "9999px",
            },
          },
        },
      };
    </script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<title>Tojar - Create Promotion</title>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
<div class="flex min-h-screen">
<aside class="w-64 bg-white/50 dark:bg-background-dark/50 border-r border-slate-200 dark:border-slate-800 flex-col justify-between hidden lg:flex">
<div>
<div class="h-16 flex items-center px-6">
<div class="flex items-center gap-3 text-primary">
<svg class="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
</svg>
<h2 class="text-xl font-bold">Tojar</h2>
</div>
</div>
<nav class="mt-4 px-4 space-y-1">
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary" href="#">
<span class="material-symbols-outlined">inventory_2</span>
<span>Products</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary" href="#">
<span class="material-symbols-outlined">local_offer</span>
<span>Promotions</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary" href="#">
<span class="material-symbols-outlined">shopping_cart</span>
<span>Orders</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary" href="#">
<span class="material-symbols-outlined">group</span>
<span>Customers</span>
</a>
</nav>
</div>
</aside>
<div class="flex-1 flex flex-col">
<header class="h-16 flex items-center justify-between px-6 bg-white/50 dark:bg-background-dark/50 border-b border-slate-200 dark:border-slate-800 sticky top-0 backdrop-blur-sm">
<div class="lg:hidden">
<button class="p-2 -ml-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
<div class="flex items-center gap-4">
<h1 class="text-xl font-bold text-slate-900 dark:text-white">Create Promotion</h1>
</div>
<div class="flex items-center gap-4">
<button class="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border-2 border-primary/50" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAVFGafbL-nxif1sGtk_g5qOUT7lyFwggeN3muRw5Quebx-22VXAfxY8TkhczPmFS1FIB3PSnCrtK1HvkfMvvdprZx8wVNuSnP2QDV-iHs6ns3cjCmyy27krIm2t4c_--PkUMCymE0dRVXNZ9k8_ganeAdDLnVIYOe2SLyA5pUfseRJbVxy9c12DOQuEiY5Nz42BOaw1XhOsGFUwIqTnknq5GfJZLz7aApJo6TTaDVamk_qBZfcJkh7rbzQbzkHM0dRdorYHDvEI8");'></div>
</div>
</header>
<main class="flex-1 overflow-y-auto p-6 lg:p-10">
<div class="max-w-4xl mx-auto">
<div class="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div class="p-6 border-b border-slate-200 dark:border-slate-800">
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Promotion Details</h3>
<p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Fill in the details to create a new promotion. Fields marked with * are required.
                </p>
</div>
<form class="divide-y divide-slate-200 dark:divide-slate-800">
<div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="promo-name-en">
                      Promotion Name (English) <span class="text-red-500">*</span>
</label>
<input class="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20" id="promo-name-en" placeholder="e.g. Summer Sale" type="text"/>
</div>
<div dir="rtl">
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="promo-name-ar">
                      اسم الترويج (العربية) <span class="text-red-500">*</span>
</label>
<input class="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20" id="promo-name-ar" placeholder="مثال: تخفيضات الصيف" type="text"/>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="promo-type">
                      Promotion Type <span class="text-red-500">*</span>
</label>
<select class="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20" id="promo-type">
<option>Percentage Discount</option>
<option>Fixed Amount Discount</option>
<option>Free Shipping</option>
</select>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="discount-value">
                      Discount Value <span class="text-red-500">*</span>
</label>
<div class="relative mt-1">
<input class="block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20 pl-8" id="discount-value" placeholder="e.g. 15" type="number"/>
<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<span class="text-slate-500 dark:text-slate-400 text-sm">%</span>
</div>
</div>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="apply-to">
                      Apply To
                    </label>
<select class="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20" id="apply-to">
<option>All Products</option>
<option>Specific Products</option>
<option>Specific Categories</option>
</select>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="product-selection">
                      Product Selection
                    </label>
<input class="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20" id="product-selection" placeholder="Search for products or categories" type="text"/>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="start-date">
                      Start Date <span class="text-red-500">*</span>
</label>
<input class="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20" id="start-date" type="date"/>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="end-date">
                      End Date
                    </label>
<input class="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20" id="end-date" type="date"/>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="limit-customer">
                      Usage Limit per Customer
                    </label>
<input class="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20" id="limit-customer" placeholder="e.g. 1" type="number"/>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="limit-total">
                      Total Usage Limit
                    </label>
<input class="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20" id="limit-total" placeholder="e.g. 100" type="number"/>
</div>
</div>
<div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="desc-en">Description (English)</label>
<textarea class="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20" id="desc-en" placeholder="Briefly describe the promotion for your customers" rows="4"></textarea>
</div>
<div dir="rtl">
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="desc-ar">الوصف (العربية)</label>
<textarea class="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary/20" id="desc-ar" placeholder="صف بإيجاز العرض الترويجي لعملائك" rows="4"></textarea>
</div>
</div>
</form>
</div>
<div class="flex justify-end gap-3 mt-8">
<button class="px-4 py-2 text-sm font-medium rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700" type="button">Cancel</button>
<button class="px-6 py-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-primary/90" type="submit">Save Promotion</button>
</div>
</div>
</main>
</div>
</div>

</body></html>` } />
        </>
    );
}