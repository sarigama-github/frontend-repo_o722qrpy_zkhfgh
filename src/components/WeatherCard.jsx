import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function WeatherCard(){
  const [coords, setCoords] = useState(null)
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const fetchWeather = async (lat, lon) => {
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/weather/${lat}/${lon}`)
      const data = await res.json()
      setWeather(data)
    } catch(e){ console.error(e) } finally { setLoading(false) }
  }

  const requestLocation = () => {
    if (!navigator.geolocation) {
      alert('Location not supported')
      return
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords
      const c = { lat: latitude.toFixed(4), lon: longitude.toFixed(4) }
      setCoords(c)
      fetchWeather(c.lat, c.lon)
    }, (err) => {
      console.error(err)
      alert('Location permission denied')
    })
  }

  useEffect(() => {
    // auto-refresh every 30 minutes
    let timer
    if (coords) {
      timer = setInterval(() => fetchWeather(coords.lat, coords.lon), 30 * 60 * 1000)
    }
    return () => timer && clearInterval(timer)
  }, [coords])

  const toggleAlerts = async () => {
    if (!coords) return alert('Enable location first')
    try {
      const res = await fetch(`${API}/api/weather/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'demo-user', lat: Number(coords.lat), lon: Number(coords.lon) })
      })
      if (res.ok) setSubscribed(true)
    } catch (e) { console.error(e) }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold mb-4">Live Weather</h2>
      <p className="text-slate-600 mb-4">Allow location to auto-fetch weather for your farm.</p>
      {!coords && (
        <button onClick={requestLocation} className="px-4 py-2 bg-emerald-600 text-white rounded-md">Allow Location</button>
      )}

      {loading && <p className="mt-3 text-slate-600">Loading weather…</p>}

      {weather && (
        <div className="mt-4 rounded-2xl border p-5 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Info label="Temperature" value={`${weather.temperature_c}°C`} />
            <Info label="Rain Probability" value={`${weather.rain_probability}%`} />
            <Info label="Humidity" value={`${weather.humidity}%`} />
            <Info label="Wind" value={`${weather.wind_speed} m/s`} />
          </div>
          <p className="mt-3 text-slate-700">{weather.recommendation}</p>
          <div className="mt-4 flex items-center gap-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={subscribed} onChange={toggleAlerts} />
              <span>Send Daily Weather Alerts</span>
            </label>
          </div>
        </div>
      )}
    </section>
  )
}

function Info({label, value}){
  return (
    <div className="rounded-lg border p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  )
}
