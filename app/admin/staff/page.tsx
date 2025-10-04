import Link from "next/link"

import Card from "@/components/ui/Card"

const staffMembers = [
  {
    id: 1,
    name: "Khalid Al Mansoori",
    role: "Owner",
    email: "khalid@tojar.ae",
    lastActive: "2 hours ago",
    status: "Active"
  },
  {
    id: 2,
    name: "Sara Al Farsi",
    role: "Support",
    email: "sara@tojar.ae",
    lastActive: "Yesterday",
    status: "Active"
  },
  {
    id: 3,
    name: "Adel Al Suwaidi",
    role: "Finance",
    email: "adel@tojar.ae",
    lastActive: "3 days ago",
    status: "MFA required"
  }
]

const invitations = [
  {
    email: "lina@tojar.ae",
    role: "Merchandiser",
    invitedAt: "May 20, 2024",
    expiresIn: "3 days"
  }
]

const accessPolicies = [
  {
    title: "Owner",
    description: "Full administrative access across orders, payouts, and site configuration."
  },
  {
    title: "Support",
    description: "Manage customer inquiries, process refunds, and monitor fulfilment."
  },
  {
    title: "Finance",
    description: "View settlements, reconcile payouts, and export transaction history."
  }
]

const statusStyles: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  "MFA required": "bg-amber-100 text-amber-700"
}

export default function StaffPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <header className="space-y-1">
          <h1 className="text-3xl font-semibold">Staff users</h1>
          <p className="text-sm text-gray-600">
            Review team access, outstanding invitations, and security posture for internal accounts.
          </p>
        </header>

        <Link
          href="/admin/staff?invite=1"
          className="inline-flex items-center justify-center rounded-md border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          Invite team member
        </Link>
      </div>

      <Card className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th scope="col" className="px-4 py-3">Name</th>
              <th scope="col" className="px-4 py-3">Role</th>
              <th scope="col" className="px-4 py-3">Status</th>
              <th scope="col" className="px-4 py-3">Last active</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {staffMembers.map((member) => (
              <tr key={member.id}>
                <td className="px-4 py-3">
                  <p className="font-medium text-gray-900">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.email}</p>
                </td>
                <td className="px-4 py-3 text-gray-700">{member.role}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      statusStyles[member.status] ?? "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500">{member.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Pending invitations</h2>
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
              {invitations.length} open
            </span>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            {invitations.map((invitation) => (
              <li key={invitation.email} className="rounded-md border border-gray-200 px-4 py-3">
                <p className="font-medium text-gray-900">{invitation.email}</p>
                <p className="text-xs text-gray-500">Role: {invitation.role}</p>
                <p className="text-xs text-gray-500">Invited: {invitation.invitedAt}</p>
                <p className="text-xs text-gray-500">Expires in {invitation.expiresIn}</p>
              </li>
            ))}

            {invitations.length === 0 && (
              <li className="rounded-md border border-dashed border-gray-300 px-4 py-8 text-center text-sm text-gray-500">
                No invitations pending approval.
              </li>
            )}
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Access policies</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {accessPolicies.map((policy) => (
              <li key={policy.title} className="rounded-md border border-gray-200 px-4 py-3">
                <p className="font-medium text-gray-900">{policy.title}</p>
                <p className="text-xs text-gray-600">{policy.description}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
