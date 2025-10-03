"use client";
export default function DashboardPage() {
    return (
        <>
            <div dangerouslySetInnerHTML={ __html: `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Tojar - Payment Gateway Settings</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
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
                        "display": ["Manrope"],
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Manrope', sans-serif;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display">
<div class="relative flex h-auto min-h-screen w-full flex-col">
<header class="flex items-center justify-between whitespace-nowrap border-b border-black/10 dark:border-white/10 px-10 py-3">
<div class="flex items-center gap-4 text-black dark:text-white">
<div class="size-6 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
</svg>
</div>
<h2 class="text-lg font-bold">Tojar</h2>
</div>
<div class="flex items-center gap-6 text-sm font-medium text-black/60 dark:text-white/60">
<a class="hover:text-primary" href="#">Dashboard</a>
<a class="hover:text-primary" href="#">Products</a>
<a class="text-primary font-semibold" href="#">Orders</a>
<a class="hover:text-primary" href="#">Customers</a>
<a class="hover:text-primary" href="#">Marketing</a>
<a class="hover:text-primary" href="#">Analytics</a>
</div>
<div class="flex items-center gap-4">
<button class="flex h-10 w-10 items-center justify-center rounded-full bg-background-light dark:bg-background-dark text-black/60 dark:text-white/60 hover:text-primary">
<span class="material-symbols-outlined">
                        help
                    </span>
</button>
<div class="size-10 rounded-full bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlkOIPnQZGkrfBu53zUXLSAxJLaNsTwa-FBWaJCFCSUiygz91R5YKCcu_iDgSCdD2obNPzzVjR7GzQDm5moXjDu5FlEavih8VON0eaoRoo7VEQSKpt4phFjWFXmuSJnbPNPutPltcQiDUtLIsHtPxH_mnbSDXN-V0a7IibgrPqZ6IW_odBphNsQTPWkH2EOcQHt1ckCgfoEgXwPhMjAxBceH6XGdqb8wmwmROme5UR0Q0AkH76R-8Mgs-pTdkhn9I_f36mObu8vws");'></div>
</div>
</header>
<main class="flex-1 px-4 py-8 sm:px-6 md:px-10">
<div class="mx-auto max-w-7xl">
<div class="mb-8">
<h1 class="text-3xl font-extrabold text-black dark:text-white">Payment Gateway Settings</h1>
<p class="mt-2 text-sm text-black/60 dark:text-white/60">Configure and manage all integrated payment gateways for your store.</p>
</div>
<div class="space-y-8">
<div class="rounded-lg bg-white dark:bg-black/20 shadow-sm border border-black/10 dark:border-white/10">
<div class="px-6 py-4 border-b border-black/10 dark:border-white/10">
<h3 class="text-lg font-bold text-black dark:text-white">Available Payment Methods</h3>
</div>
<div class="overflow-x-auto">
<table class="w-full text-sm">
<thead class="text-left text-black/60 dark:text-white/60">
<tr>
<th class="px-6 py-4 font-semibold">Payment Method</th>
<th class="px-6 py-4 font-semibold">Status</th>
<th class="px-6 py-4 font-semibold">Configuration</th>
<th class="px-6 py-4 font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-black/10 dark:divide-white/10 text-black dark:text-white">
<tr>
<td class="px-6 py-4 whitespace-nowrap font-medium">Credit Card Processing</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
<svg class="mr-1.5 h-2 w-2 text-primary" fill="currentColor" viewBox="0 0 8 8">
<circle cx="4" cy="4" r="3"></circle>
</svg>
                                                Enabled
                                            </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-black/60 dark:text-white/60">API Keys Set</td>
<td class="px-6 py-4 whitespace-nowrap text-right">
<button class="font-semibold text-primary hover:text-primary/80">Manage</button>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap font-medium">Bank Transfer</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center rounded-full bg-black/10 dark:bg-white/10 px-3 py-1 text-xs font-semibold text-black/60 dark:text-white/60">
<svg class="mr-1.5 h-2 w-2 text-black/40 dark:text-white/40" fill="currentColor" viewBox="0 0 8 8">
<circle cx="4" cy="4" r="3"></circle>
</svg>
                                                Disabled
                                            </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-black/60 dark:text-white/60">Not Configured</td>
<td class="px-6 py-4 whitespace-nowrap text-right">
<button class="font-semibold text-primary hover:text-primary/80">Configure</button>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap font-medium">Local Payment Solution (Fawry)</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center rounded-full bg-black/10 dark:bg-white/10 px-3 py-1 text-xs font-semibold text-black/60 dark:text-white/60">
<svg class="mr-1.5 h-2 w-2 text-black/40 dark:text-white/40" fill="currentColor" viewBox="0 0 8 8">
<circle cx="4" cy="4" r="3"></circle>
</svg>
                                                Disabled
                                            </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-black/60 dark:text-white/60">Not Configured</td>
<td class="px-6 py-4 whitespace-nowrap text-right">
<button class="font-semibold text-primary hover:text-primary/80">Configure</button>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap font-medium">Apple Pay</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
<svg class="mr-1.5 h-2 w-2 text-primary" fill="currentColor" viewBox="0 0 8 8">
<circle cx="4" cy="4" r="3"></circle>
</svg>
                                                Enabled
                                            </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-black/60 dark:text-white/60">Credentials Set</td>
<td class="px-6 py-4 whitespace-nowrap text-right">
<button class="font-semibold text-primary hover:text-primary/80">Manage</button>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap font-medium">Google Pay</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
<svg class="mr-1.5 h-2 w-2 text-primary" fill="currentColor" viewBox="0 0 8 8">
<circle cx="4" cy="4" r="3"></circle>
</svg>
                                                Enabled
                                            </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-black/60 dark:text-white/60">Credentials Set</td>
<td class="px-6 py-4 whitespace-nowrap text-right">
<button class="font-semibold text-primary hover:text-primary/80">Manage</button>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-nowrap font-medium">Cash on Delivery</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
<svg class="mr-1.5 h-2 w-2 text-primary" fill="currentColor" viewBox="0 0 8 8">
<circle cx="4" cy="4" r="3"></circle>
</svg>
                                                Enabled
                                            </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-black/60 dark:text-white/60">No Configuration Needed</td>
<td class="px-6 py-4 whitespace-nowrap text-right">
<button class="font-semibold text-primary hover:text-primary/80">Manage</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="rounded-lg bg-white dark:bg-black/20 shadow-sm border border-black/10 dark:border-white/10">
<div class="px-6 py-4 border-b border-black/10 dark:border-white/10 flex justify-between items-center">
<h3 class="text-lg font-bold text-black dark:text-white">Bank Transfer Settings</h3>
<div class="flex items-center">
<span class="text-sm mr-3 text-black/60 dark:text-white/60">Enable Bank Transfer</span>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>
</div>
<div class="p-6 space-y-6">
<div>
<h4 class="font-semibold text-black dark:text-white mb-2">Bank Account Details</h4>
<p class="text-sm text-black/60 dark:text-white/60 mb-4">These details will be shown to customers who select Bank Transfer at checkout.</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label class="block text-sm font-medium text-black/80 dark:text-white/80 mb-1" for="bank-name">Bank Name</label>
<input class="w-full rounded-md border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark text-black dark:text-white focus:ring-primary focus:border-primary" id="bank-name" type="text" value="Emirates NBD"/>
</div>
<div>
<label class="block text-sm font-medium text-black/80 dark:text-white/80 mb-1" for="account-number">Account Number</label>
<input class="w-full rounded-md border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark text-black dark:text-white focus:ring-primary focus:border-primary" id="account-number" type="text" value="1012345678901"/>
</div>
<div>
<label class="block text-sm font-medium text-black/80 dark:text-white/80 mb-1" for="iban">IBAN</label>
<input class="w-full rounded-md border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark text-black dark:text-white focus:ring-primary focus:border-primary" id="iban" type="text" value="AE070331234567890123456"/>
</div>
<div>
<label class="block text-sm font-medium text-black/80 dark:text-white/80 mb-1" for="swift-bic">SWIFT/BIC Code</label>
<input class="w-full rounded-md border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark text-black dark:text-white focus:ring-primary focus:border-primary" id="swift-bic" type="text" value="EBILAEAD"/>
</div>
</div>
</div>
<div class="border-t border-black/10 dark:border-white/10 pt-6">
<h4 class="font-semibold text-black dark:text-white mb-2">Customer Instructions</h4>
<p class="text-sm text-black/60 dark:text-white/60 mb-4">Provide clear instructions for your customers to follow after making the transfer.</p>
<textarea class="w-full rounded-md border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark text-black dark:text-white focus:ring-primary focus:border-primary" placeholder="e.g., Please use your Order ID as the payment reference. Send the transaction receipt to payments@tojar.ae for faster processing." rows="4">Please use your Order ID as the payment reference. Your order will be processed once the payment is confirmed.</textarea>
</div>
<div class="border-t border-black/10 dark:border-white/10 pt-6">
<h4 class="font-semibold text-black dark:text-white mb-2">Verification Process</h4>
<p class="text-sm text-black/60 dark:text-white/60 mb-4">Configure how bank transfer payments are verified.</p>
<div class="space-y-4">
<div class="flex items-start">
<input checked="" class="focus:ring-primary h-4 w-4 text-primary border-gray-300 dark:border-gray-600" id="manual-verification" name="verification-type" type="radio"/>
<div class="ml-3 text-sm">
<label class="font-medium text-black dark:text-white" for="manual-verification">Manual Verification</label>
<p class="text-black/60 dark:text-white/60">Manually confirm each payment from your bank account and update the order status.</p>
</div>
</div>
<div class="flex items-start">
<input class="focus:ring-primary h-4 w-4 text-primary border-gray-300 dark:border-gray-600" id="receipt-upload" name="verification-type" type="radio"/>
<div class="ml-3 text-sm">
<label class="font-medium text-black dark:text-white" for="receipt-upload">Require Receipt Upload</label>
<p class="text-black/60 dark:text-white/60">Customers must upload a proof of payment (e.g., transaction receipt) to complete the order.</p>
</div>
</div>
</div>
</div>
</div>
<div class="px-6 py-4 bg-background-light dark:bg-background-dark/50 border-t border-black/10 dark:border-white/10 flex justify-end">
<button class="px-6 py-2 rounded-md font-semibold text-white bg-primary hover:bg-primary/90">Save Changes</button>
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