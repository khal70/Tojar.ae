export function orderConfirmationEmail(orderId: number, total: number) {
  return `
  <div style="font-family: Arial, sans-serif; padding: 16px; color: #333;">
    <h2 style="color: #2c3e50;">🛍️ Your Order at Tojar</h2>
    <p>Thank you for shopping with us!</p>
    <table style="margin-top: 12px;">
      <tr><td><strong>Order ID:</strong></td><td>${orderId}</td></tr>
      <tr><td><strong>Total Paid:</strong></td><td>$${total}</td></tr>
    </table>
    <p style="margin-top: 20px;">We'll notify you when it's shipped. Visit <a href="https://tojar.ae">tojar.ae</a> anytime.</p>
    <p style="margin-top: 32px;">💙 Tojar Team</p>
  </div>
  `
}
