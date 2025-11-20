import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="min-h-[60vh] grid place-items-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald-600">404</h1>
        <p className="mt-2 text-slate-700">Page not found</p>
        <Link to="/" className="inline-block mt-6 bg-emerald-600 text-white px-6 py-3 rounded-xl">Go Home</Link>
      </div>
    </section>
  )
}
