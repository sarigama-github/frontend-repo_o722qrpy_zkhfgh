import Spline from '@splinetool/react-spline'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/95 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Smart Krishi – India’s AI Farming Assistant
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-2xl">
            Helping farmers make smart decisions with AI, weather alerts, and mandi rates.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#download" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow hover:bg-emerald-700 transition">
              Download App <ArrowRight size={18} />
            </a>
            <a href="#whatsapp" className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-xl shadow hover:bg-sky-600 transition">
              <Phone size={18} /> Try WhatsApp Bot
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-3xl p-6 shadow-xl">
            <div className="aspect-[3/4] rounded-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <p className="text-center mt-4 text-slate-600">Illustration: Farmer using AI on phone</p>
          </div>
        </div>
      </div>
    </section>
  )
}
