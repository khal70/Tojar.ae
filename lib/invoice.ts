import PDFDocument from 'pdfkit'
import fs from 'fs'
import path from 'path'

export async function generateInvoice(orderId: number, total: number) {
  const doc = new PDFDocument()
  const filePath = path.resolve('/tmp', `invoice-${orderId}.pdf`)
  doc.pipe(fs.createWriteStream(filePath))

  doc.fontSize(20).text('Tojar Invoice', { align: 'center' })
  doc.moveDown()
  doc.text(`Order ID: ${orderId}`)
  doc.text(`Total Paid: $${total}`)
  doc.end()

  return filePath
}
