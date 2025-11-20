import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function DemoPage(){
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState(null)
  const [mandi, setMandi] = useState(null)
  const [fert, setFert] = useState(null)
  const [image, setImage] = useState(null)
  const [result, setResult] = useState(null)

  const onPickImage = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage({ file, preview: URL.createObjectURL(file) })
    }
  }

  const triggerInput = (accept) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = accept
    if (accept.includes('camera')) input.capture = 'environment'
    input.onchange = onPickImage
    input.click()
  }

  const analyzeImage = async () => {
    if (!image?.file) return
    setLoading(true)
    setResult(null)
    try {
      const form = new FormData()
      form.append('image', image.file)
      form.append('crop', 'Wheat')
      form.append('userId', 'demo-user')
      const res = await fetch(`${API}/api/detect-disease`, { method: 'POST', body: form })
      const data = await res.json()
      setResult(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const runWeatherDemo = async () => {
    setLoading(true)
    setWeather(null)
    try {
      const res = await fetch(`${API}/api/demo/weather`)
      setWeather(await res.json())
    } catch (e) { console.error(e) } finally { setLoading(false) }
  }

  const runMandiDemo = async () => {
    setLoading(true)
    setMandi(null)
    try {
      const res = await fetch(`${API}/api/demo/mandi`)
      setMandi(await res.json())
    } catch (e) { console.error(e) } finally { setLoading(false) }
  }

  const runFertilizerDemo = async () => {
    setLoading(true)
    setFert(null)
    try {
      const res = await fetch(`${API}/api/demo/fertilizer?crop=Wheat`)
      setFert(await res.json())
    } catch (e) { console.error(e) } finally { setLoading(false) }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">App Demo</h1>

      {/* Disease Detection Demo */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Try Disease Detection</h2>
        <div className="flex gap-3 flex-wrap">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-md" onClick={() => triggerInput('image/*;capture=camera')}>Open Camera</button>
          <button className="px-4 py-2 bg-slate-800 text-white rounded-md" onClick={() => triggerInput('image/*')}>Open Gallery</button>
        </div>
        {image && (
          <div className="mt-4">
            <img src={image.preview} alt="preview" className="w-40 h-40 object-cover rounded-lg border" />
            <div className="mt-3">
              <button onClick={analyzeImage} className="px-4 py-2 bg-emerald-700 text-white rounded-md">Analyze</button>
            </div>
          </div>
        )}
        {loading && <p className="mt-3 text-slate-600">Analyzing Crop…</p>}
        {result && (
          <div className="mt-4 p-4 border rounded-xl">
            <p><span className="font-medium">Disease:</span> {result.disease}</p>
            <p><span className="font-medium">Accuracy:</span> {(result.accuracy*100).toFixed(0)}%</p>
            <p><span className="font-medium">Pesticide:</span> {result.recommended_pesticide}</p>
            <p><span className="font-medium">Cost:</span> {result.cost_estimate}</p>
            {Array.isArray(result.preventive_tips) && (
              <ul className="list-disc pl-6 mt-2 text-sm text-slate-700">
                {result.preventive_tips.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Weather Demo */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Live Weather Demo</h2>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md" onClick={runWeatherDemo}>Fetch Sample Weather</button>
        {weather && (
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Stat label="Temp" value={`${weather.temperature_c}°C`} />
            <Stat label="Rain" value={`${weather.rain_probability}%`} />
            <Stat label="Humidity" value={`${weather.humidity}%`} />
            <Stat label="Wind" value={`${weather.wind_speed} m/s`} />
            <div className="col-span-full text-slate-700">{weather.recommendation}</div>
          </div>
        )}
      </div>

      {/* Mandi Demo */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Mandi Price Demo</h2>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md" onClick={runMandiDemo}>Show Bhopal Rates</button>
        {mandi && (
          <div className="mt-4 grid gap-2">
            {mandi.items.map((it) => (
              <div key={it.crop} className="flex justify-between border rounded-md p-3">
                <span>{it.crop}</span>
                <span className="font-semibold">₹{it.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fertilizer Demo */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold mb-4">Fertilizer Guide Demo</h2>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md" onClick={runFertilizerDemo}>Load Wheat Plan</button>
        {fert && (
          <div className="mt-4">
            {fert.plan.map((p) => (
              <div key={p.stage} className="p-3 border rounded-md mb-2">
                <p className="font-medium">{p.stage}</p>
                <p className="text-slate-700 text-sm">{p.recommendation}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </section>
  )
}

function Stat({ label, value }){
  return (
    <div className="rounded-lg border p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  )
}
