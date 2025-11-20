export default function DemoPage(){
  const mockups = [
    'Home', 'AI Disease Detector', 'Weather', 'Mandi Prices', 'Fertilizer Guide', 'Govt Schemes'
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">App Demo</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockups.map((m) => (
          <div key={m} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="aspect-[9/19] rounded-xl bg-gradient-to-br from-emerald-50 to-sky-50 border border-slate-200 flex items-center justify-center text-slate-600">
              {m}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
