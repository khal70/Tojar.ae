import AdminLayout from "@/components/ui/AdminLayout"
import Card from "@/components/ui/Card"

const staff = [
  { id: 1, name: "Khalid Al Mansoori", role: "Owner", lastActive: "2 hours ago" },
  { id: 2, name: "Sara Al Farsi", role: "Support", lastActive: "Yesterday" }
]

export default function StaffPage() {
  return (
    <AdminLayout>
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Staff Users</h1>
        <p className="text-sm text-gray-600">Manage team access and monitor recent activity.</p>
      </header>

      <Card>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th scope="col" className="py-2">Name</th>
              <th scope="col" className="py-2">Role</th>
              <th scope="col" className="py-2">Last Active</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member) => (
              <tr key={member.id} className="border-t border-gray-200">
                <td className="py-3 font-medium text-gray-800">{member.name}</td>
                <td className="py-3">{member.role}</td>
                <td className="py-3">{member.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AdminLayout>
  )
}
