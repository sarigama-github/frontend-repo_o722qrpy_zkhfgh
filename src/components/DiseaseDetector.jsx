import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function DiseaseDetector(){
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [crop, setCrop] = useState('Wheat')
  const [result, setResult] = useState(null)

  const onPickImage = (e) => {
    const file = e.target.files?.[0]
    if (file) setImage({ file, preview: URL.createObjectURL(file) })
  }

  const openCamera = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.capture = 'environment'
    input.onchange = onPickImage
    input.click()
  }

  const openGallery = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = onPickImage
    input.click()
  }

  const analyze = async () => {
    if (!image?.file) return
    setLoading(true)
    setResult(null)
    try {
      const form = new FormData()
      form.append('image', image.file)
      form.append('crop', crop)
      form.append('userId', 'demo-user')
      const res = await fetch(`${API}/api/detect-disease`, { method: 'POST', body: form })
      if (!res.ok) throw new Error('Failed to analyze')
      const data = await res.json()
      setResult(data)
    } catch (e) {
      alert('Analysis failed. Please try again.')
      console.error(e)
    } finally { setLoading(false) }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-2">AI Disease Detector – Image Upload</h1>
      <p className="text-slate-600 mb-6">Use your phone camera or pick from gallery. We will analyze the image and show the diagnosis.</p>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <select value={crop} onChange={(e)=>setCrop(e.target.value)} className="border rounded-md px-3 py-2">
          <option>Wheat</option>
          <option>Rice</option>
          <option>Maize</option>
          <option>Soyabean</option>
        </select>
        <button onClick={openCamera} className="px-4 py-2 bg-emerald-600 text-white rounded-md">Open Camera</button>
        <button onClick={openGallery} className="px-4 py-2 bg-slate-800 text-white rounded-md">Open Gallery</button>
      </div>

      {image && (
        <div className="mt-4 flex items-start gap-6">
          <img src={image.preview} alt="preview" className="w-48 h-48 object-cover rounded-lg border" />
          <div>
            <button onClick={analyze} disabled={loading} className="px-4 py-2 bg-emerald-700 text-white rounded-md disabled:opacity-60">{loading? 'Analyzing Crop…':'Analyze'}</button>
          </div>
        </div>
      )}

      {result && (
        <div className="mt-6 p-5 border rounded-2xl bg-white">
          <h2 className="text-xl font-semibold mb-2">Result</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Info label="Disease name" value={result.disease} />
            <Info label="Accuracy" value={`${Math.round(result.accuracy*100)}%`} />
            <Info label="Recommended pesticide" value={result.recommended_pesticide} />
            <Info label="Cost estimate" value={result.cost_estimate} />
          </div>
          {Array.isArray(result.preventive_tips) && (
            <div className="mt-4">
              <p className="font-medium mb-1">Preventive tips</p>
              <ul className="list-disc pl-6 text-slate-700">
                {result.preventive_tips.map((t, i)=> <li key={i}>{t}</li>)}
              </ul>
            </div>
          )}
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
