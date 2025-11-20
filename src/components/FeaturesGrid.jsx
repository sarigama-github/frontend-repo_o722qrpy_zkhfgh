import { Brain, CloudRain, IndianRupee, Sprout } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Crop Disease Detection',
    desc: 'Upload leaf photo and get instant diagnosis with remedy steps.'
  },
  {
    icon: CloudRain,
    title: 'Weather Alerts',
    desc: 'Rainfall, temperature and irrigation timing suggestions.'
  },
  {
    icon: IndianRupee,
    title: 'Mandi Prices Live',
    desc: 'Get nearest mandi rates and weekly trends.'
  },
  {
    icon: Sprout,
    title: 'Fertilizer Guidance',
    desc: 'Crop + soil based fertilizer name, quantity and timing.'
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-20 bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white shadow-sm p-6 border border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <f.icon />
              </div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
