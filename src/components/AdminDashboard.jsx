export default function AdminDashboard(){
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h2 className="font-semibold mb-2">Users</h2>
          <p className="text-slate-600 text-sm">List of registered users will appear here.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h2 className="font-semibold mb-2">Diagnosis Reports</h2>
          <p className="text-slate-600 text-sm">Submitted AI diagnosis records.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h2 className="font-semibold mb-2">Mandi Price Editor</h2>
          <p className="text-slate-600 text-sm">Update mandi prices and sync.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h2 className="font-semibold mb-2">Alerts</h2>
          <p className="text-slate-600 text-sm">Weather and fertilizer alerts activity.</p>
        </div>
      </div>
    </section>
  )
}
