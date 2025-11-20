import { Server, Cpu, Database, Bot, Cloud, AppWindow } from 'lucide-react'

const tech = [
  { icon: AppWindow, title: 'Frontend', desc: 'React Native / Flutter (mobile)', color: 'text-emerald-600' },
  { icon: Server, title: 'Backend', desc: 'Node.js or FastAPI for AI models', color: 'text-sky-600' },
  { icon: Database, title: 'Database', desc: 'Firebase / MongoDB for persistence', color: 'text-amber-600' },
  { icon: Cpu, title: 'AI / ML', desc: 'TensorFlow Lite, FastAPI hosting', color: 'text-purple-600' },
  { icon: Cloud, title: 'APIs', desc: 'OpenWeather, Govt Mandi APIs, Soil datasets', color: 'text-blue-600' },
  { icon: Bot, title: 'Chatbot', desc: 'WhatsApp via Twilio, Dialogflow', color: 'text-rose-600' },
]

export default function TechStack() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Technology Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tech.map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 ${t.color}`}>
                <t.icon />
              </div>
              <h3 className="font-semibold text-slate-900">{t.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
