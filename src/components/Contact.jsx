import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      phone: form.get('phone'),
      village: form.get('village'),
      district: form.get('district'),
      message: form.get('message'),
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false })
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F5F0E6] p-6 rounded-2xl">
          <input name="name" placeholder="Name" required className="px-4 py-3 rounded-lg border border-slate-300" />
          <input name="phone" placeholder="Phone number" required className="px-4 py-3 rounded-lg border border-slate-300" />
          <input name="village" placeholder="Village" className="px-4 py-3 rounded-lg border border-slate-300" />
          <input name="district" placeholder="District" className="px-4 py-3 rounded-lg border border-slate-300" />
          <textarea name="message" placeholder="Message" className="sm:col-span-2 px-4 py-3 rounded-lg border border-slate-300" rows={4} />
          <div className="sm:col-span-2 flex items-center gap-3">
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700">Submit</button>
            {status?.ok && <span className="text-emerald-700">Thanks! We will reach out soon.</span>}
            {status && !status.ok && <span className="text-rose-600">Something went wrong. Try again.</span>}
          </div>
        </form>
        <div className="mt-6 text-slate-700 space-y-2">
          <a href="#whatsapp" className="text-emerald-700 font-medium">Chat with Support on WhatsApp</a>
          <div>Email: hello@smartkrishi.app</div>
          <div>Instagram • YouTube</div>
        </div>
      </div>
    </section>
  )
}
