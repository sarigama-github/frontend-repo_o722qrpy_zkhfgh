export default function TestimonialsPage(){
  const people = [
    {name:'Ramesh Kumar', region:'Jaipur, Rajasthan', photo:'https://i.pravatar.cc/150?img=12', quote:'Smart Krishi ne irrigation aur mandi rates me bahut madad ki.'},
    {name:'Sita Devi', region:'Varanasi, UP', photo:'https://i.pravatar.cc/150?img=32', quote:'Disease detection feature se fasal bach gayi.'},
    {name:'Harpreet Singh', region:'Ludhiana, Punjab', photo:'https://i.pravatar.cc/150?img=22', quote:'Saste fertilizer alternatives bahut kaam ke hain.'},
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Testimonials</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {people.map((p) => (
          <div key={p.name} className="rounded-2xl bg-white border border-slate-200 p-6 text-center shadow-sm">
            <img src={p.photo} alt={p.name} className="w-20 h-20 rounded-full mx-auto"/>
            <div className="mt-3 font-semibold text-slate-900">{p.name}</div>
            <div className="text-sm text-slate-600">{p.region}</div>
            <p className="mt-3 text-slate-700">“{p.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  )
}
