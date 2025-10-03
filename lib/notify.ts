export async function notifySlack(orderId: number, total: number) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL
  if (!webhookUrl) return

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: `🛍️ New order received! ID: ${orderId}, Total: $${total}`
    })
  })
}
