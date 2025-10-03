"use client";
export default function TaxView() {
    return (
        <>
            <div dangerouslySetInnerHTML={ __html: `<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Tojar - Tax Settings</title>
<link crossorigin="" href="https://fonts.gstatic.com/" rel="preconnect"/>
<link as="style" href="https://fonts.googleapis.com/css2?display=swap&amp;family=Manrope:wght@400;500;700;800" onload="this.rel='stylesheet'" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
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
            borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
          },
        },
      };
    </script>
<style>
      body {
        font-family: "Manrope", sans-serif;
      }
      .form-radio:checked {
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%231193d4' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
      }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
<div class="flex min-h-screen">
<header class="w-64 bg-background-light/50 dark:bg-background-dark/50 border-r border-gray-200 dark:border-gray-800 flex flex-col">
<div class="flex items-center gap-3 px-6 h-16 border-b border-gray-200 dark:border-gray-800">
<svg class="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
</svg>
<h1 class="text-xl font-bold text-gray-900 dark:text-white">Tojar</h1>
</div>
<nav class="flex-1 px-4 py-6 space-y-2">
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20" href="#">
<span class="material-symbols-outlined">shopping_bag</span>
<span>Orders</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20" href="#">
<span class="material-symbols-outlined">inventory_2</span>
<span>Products</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20" href="#">
<span class="material-symbols-outlined">group</span>
<span>Customers</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20" href="#">
<span class="material-symbols-outlined">campaign</span>
<span>Marketing</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20" href="#">
<span class="material-symbols-outlined">analytics</span>
<span>Analytics</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary font-semibold" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</nav>
</header>
<main class="flex-1">
<div class="border-b border-gray-200 dark:border-gray-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-10">
<div class="flex items-center justify-end h-16 px-6 gap-4">
<button class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
<span class="material-symbols-outlined">help</span>
</button>
<button class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="flex items-center gap-3">
<img alt="User avatar" class="size-9 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQe9QLMdFPNQyGtQjOfq8-5RQYUABglXPiMmTvzfcAGPQFW1-7Hme8cbfXt3dZZlYRAUlWTASYmtNdvdP6Qep9zr34Wd4D8wy9CdQGxutvwbOyXE1IsJgtf9h0fiuAuiG2DH6wH2dXhIPVPArfuQXyDEAiPfyPdVFZBFHnuli1EFPv4yizg_qTSlDsucxmY52XVRWIIgxhepQkRk6JgmlxAW3U7eSD5Hdjj9rnLtIIS8j-earPeI1v8hsjqwIRpzfpHpoB64hE1oQ"/>
<div>
<p class="text-sm font-semibold text-gray-900 dark:text-white">Admin User</p>
<p class="text-xs text-gray-500 dark:text-gray-400">admin@tojar.ae</p>
</div>
</div>
</div>
</div>
<div class="p-8">
<div class="max-w-4xl mx-auto">
<div class="mb-8">
<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Tax Settings</h2>
<p class="mt-1 text-gray-600 dark:text-gray-400">Configure tax settings for your store, including VAT rates, exemptions, and display options.</p>
</div>
<div class="space-y-10">
<section class="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">VAT Registration</h3>
<div>
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300" for="vat-number">VAT Registration Number</label>
<input class="mt-1 block w-full max-w-sm rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-sm" id="vat-number" placeholder="Enter VAT registration number" type="text"/>
</div>
</section>
<section class="space-y-4">
<div class="flex justify-between items-center">
<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Tax Rates</h3>
<button class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg">
<span class="material-symbols-outlined text-base">add</span>
<span>Add Tax Rate</span>
</button>
</div>
<div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
<thead class="bg-gray-50 dark:bg-gray-800/50">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Tax Name</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Rate</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Based On</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Shipping Zones</th>
<th class="relative px-6 py-3" scope="col"><span class="sr-only">Edit</span></th>
</tr>
</thead>
<tbody class="bg-background-light dark:bg-background-dark/50 divide-y divide-gray-200 dark:divide-gray-800">
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Standard VAT</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">5%</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Product Price</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">All Emirates</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-primary hover:text-primary/80" href="#">Edit</a>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Reduced VAT</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">0%</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Specific Products</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">All Emirates</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-primary hover:text-primary/80" href="#">Edit</a>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Exempt</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">0%</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Specific Categories</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">All Emirates</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-primary hover:text-primary/80" href="#">Edit</a>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<section class="space-y-4">
<div class="flex justify-between items-center">
<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Tax Classes</h3>
<button class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg">
<span class="material-symbols-outlined text-base">add</span>
<span>Add Tax Class</span>
</button>
</div>
<div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
<thead class="bg-gray-50 dark:bg-gray-800/50">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Tax Class Name</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Description</th>
<th class="relative px-6 py-3" scope="col"><span class="sr-only">Edit</span></th>
</tr>
</thead>
<tbody class="bg-background-light dark:bg-background-dark/50 divide-y divide-gray-200 dark:divide-gray-800">
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Standard</td>
<td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Default tax class for most products</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-primary hover:text-primary/80" href="#">Edit</a>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Reduced</td>
<td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Tax class for specific products with reduced VAT</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-primary hover:text-primary/80" href="#">Edit</a>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<section class="space-y-4">
<div class="flex justify-between items-center">
<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Tax Exemptions</h3>
<button class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg">
<span class="material-symbols-outlined text-base">add</span>
<span>Add Tax Exemption</span>
</button>
</div>
<div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
<thead class="bg-gray-50 dark:bg-gray-800/50">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Exemption Name</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Customer Group</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" scope="col">Products/Categories</th>
<th class="relative px-6 py-3" scope="col"><span class="sr-only">Edit</span></th>
</tr>
</thead>
<tbody class="bg-background-light dark:bg-background-dark/50 divide-y divide-gray-200 dark:divide-gray-800">
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Government Entities</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Government</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">All Products</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-primary hover:text-primary/80" href="#">Edit</a>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Specific Products</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">All Customers</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Selected Products</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-primary hover:text-primary/80" href="#">Edit</a>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<section class="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Display Options</h3>
<div class="space-y-3">
<label class="flex items-center p-4 rounded-lg border border-gray-300 dark:border-gray-700 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
<input checked="" class="form-radio h-4 w-4 text-primary border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 focus:ring-primary" name="tax-display" type="radio"/>
<span class="ml-3 text-sm font-medium text-gray-800 dark:text-gray-200">Prices are inclusive of tax</span>
</label>
<label class="flex items-center p-4 rounded-lg border border-gray-300 dark:border-gray-700 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
<input class="form-radio h-4 w-4 text-primary border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 focus:ring-primary" name="tax-display" type="radio"/>
<span class="ml-3 text-sm font-medium text-gray-800 dark:text-gray-200">Prices are exclusive of tax</span>
</label>
</div>
</section>
<section class="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tax Reports</h3>
<p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Generate comprehensive tax reports for compliance and accounting purposes.</p>
<button class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary border border-primary/50 hover:bg-primary/10 rounded-lg">
<span class="material-symbols-outlined text-base">download</span>
<span>Generate Tax Report</span>
</button>
</section>
<div class="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-800">
<button class="px-6 py-3 font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg">
                  Save Settings
                </button>
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