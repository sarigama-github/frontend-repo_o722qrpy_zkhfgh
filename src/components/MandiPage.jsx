import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function MandiPage(){
  const [district, setDistrict] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchMandi = async () => {
    if (!district) return
    setLoading(true)
    setData(null)
    try {
      const res = await fetch(`${API}/api/mandi/${encodeURIComponent(district)}`)
      const d = await res.json()
      setData(d)
    } catch (e) { console.error(e) } finally { setLoading(false) }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-2">Mandi Rate Finder</h1>
      <p className="text-slate-600 mb-4">Enter your district to see live mandi rates and trends.</p>
      <div className="flex gap-3 flex-wrap mb-4">
        <input value={district} onChange={(e)=>setDistrict(e.target.value)} placeholder="Enter Your District" className="border rounded-md px-3 py-2 w-64" />
        <button onClick={fetchMandi} className="px-4 py-2 bg-emerald-600 text-white rounded-md">Search</button>
      </div>

      {loading && <p className="text-slate-600">Fetching prices…</p>}

      {data && (
        <div className="mt-4">
          <div className="grid md:grid-cols-2 gap-3">
            {data.items.map((it) => (
              <div key={it.crop} className="p-3 border rounded-lg flex justify-between">
                <span>{it.crop}</span>
                <span className="font-semibold">₹{it.price}/quintal</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Last 7 Days Trend</h3>
            <div className="w-full overflow-x-auto">
              <table className="min-w-[600px] w-full border">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border px-2 py-1 text-left">Date</th>
                    <th className="border px-2 py-1 text-left">Crop</th>
                    <th className="border px-2 py-1 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data.trend.map((t, idx) => (
                    <tr key={idx}>
                      <td className="border px-2 py-1">{t.date}</td>
                      <td className="border px-2 py-1">{t.crop}</td>
                      <td className="border px-2 py-1">₹{t.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 border rounded-lg">
            <p className="font-medium">Best Mandi to Sell Today</p>
            <p>{data.best_mandi} – {data.best_crop} at ₹{data.best_price}</p>
          </div>
        </div>
      )}
    </section>
  )
}
