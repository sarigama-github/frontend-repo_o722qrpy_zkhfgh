export default function Pricing() {
  return (
    <section className="py-20 bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-8 border border-slate-200">
            <h3 className="text-xl font-semibold">Free Plan</h3>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>• Weather alerts</li>
              <li>• Govt scheme notifications</li>
              <li>• Mandi prices</li>
              <li>• Community forum</li>
            </ul>
            <button className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700">Start Free</button>
          </div>
          <div className="rounded-2xl bg-white p-8 border-2 border-emerald-600 shadow-lg">
            <h3 className="text-xl font-semibold">Pro Plan – ₹49/month</h3>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>• AI crop disease detection</li>
              <li>• Fertilizer calculation AI</li>
              <li>• Personalized crop planning</li>
              <li>• Early pest warning system</li>
            </ul>
            <button className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700">Start Free</button>
          </div>
        </div>
      </div>
    </section>
  )
}
