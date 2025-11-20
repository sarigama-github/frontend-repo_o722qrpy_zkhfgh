export default function HowItWorks(){
  const steps = [
    {title: 'Crop Selection', desc: 'Choose crop to load its profile.'},
    {title: 'AI Data Analysis', desc: 'Weather + soil + disease risk combined.'},
    {title: 'Personalized Advice', desc: 'Irrigation, fertilizer, and pest care plan.'},
    {title: 'Photo Upload (Optional)', desc: 'AI disease result with remedy.'},
    {title: 'Auto Alerts', desc: 'Daily WhatsApp/SMS tips.'},
  ]
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-bold text-slate-900 mb-10">How It Works</h1>
      <ol className="relative border-s border-transparent before:content-[''] before:absolute before:left-1/2 before:top-0 before:h-full before:w-1 before:bg-emerald-200">
        {steps.map((s, i) => (
          <li key={s.title} className={`grid md:grid-cols-2 gap-6 items-center py-8 ${i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}>
            <div className="text-right md:pr-10">
              <div className="text-emerald-700 font-semibold">Step {i+1}</div>
              <div className="text-2xl font-semibold text-slate-900">{s.title}</div>
            </div>
            <div className="bg-[#F5F0E6] rounded-xl p-6 text-slate-700">{s.desc}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}
