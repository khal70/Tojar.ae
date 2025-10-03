"use client"

import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const staffMembers = [
  { id: 1, name: "Aisha Al Nuaimi", role: "Store Manager", email: "aisha@tojar.ae" },
  { id: 2, name: "Mohammed Al Farsi", role: "Operations", email: "mohammed@tojar.ae" },
  { id: 3, name: "Layla Al Mansoori", role: "Marketing", email: "layla@tojar.ae" }
]

export default function StaffPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold mb-2">Staff Users</h1>
          <p className="text-gray-600 text-sm">Manage administrative access for your internal team.</p>
        </header>

        <Card>
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Role</th>
                <th className="py-2">Email</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffMembers.map((member) => (
                <tr key={member.id} className="border-t border-gray-200">
                  <td className="py-3 font-medium text-gray-800">{member.name}</td>
                  <td className="py-3">{member.role}</td>
                  <td className="py-3">{member.email}</td>
                  <td className="py-3">
                    <button className="rounded border border-gray-300 px-3 py-1 text-xs font-medium hover:bg-gray-50">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </AdminLayout>
  )
}
