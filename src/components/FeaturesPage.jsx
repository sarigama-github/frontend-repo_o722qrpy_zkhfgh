import { Upload, CloudRain, IndianRupee, Sprout } from 'lucide-react'

export default function FeaturesPage(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Features</h1>

      <div className="space-y-10">
        <section className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h2 className="text-2xl font-semibold flex items-center gap-2"><Upload className="text-emerald-600"/> AI Crop Disease Detection</h2>
          <p className="text-slate-700 mt-2">Upload a leaf photo, our AI predicts disease, gives solution, pesticide and cost estimate.</p>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#F5F0E6]">1. Upload photo</div>
            <div className="p-4 rounded-xl bg-[#F5F0E6]">2. Get diagnosis + remedy</div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h2 className="text-2xl font-semibold flex items-center gap-2"><CloudRain className="text-sky-600"/> Weather Alerts</h2>
          <ul className="list-disc pl-6 text-slate-700 mt-2 space-y-1">
            <li>3-hourly weather updates</li>
            <li>Irrigation timing guidance</li>
            <li>Extreme weather warnings</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h2 className="text-2xl font-semibold flex items-center gap-2"><IndianRupee className="text-amber-600"/> Mandi Prices</h2>
          <p className="text-slate-700 mt-2">Live mandi rates from official APIs, last 7 day trend, and best mandi recommendation.</p>
        </section>

        <section className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h2 className="text-2xl font-semibold flex items-center gap-2"><Sprout className="text-emerald-600"/> Fertilizer Guide</h2>
          <ul className="list-disc pl-6 text-slate-700 mt-2 space-y-1">
            <li>Crop + soil based suggestions</li>
            <li>Micro + macro nutrient planning</li>
            <li>Low cost fertilizer alternatives</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
