import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function AppLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Smart Krishi. All rights reserved.
      </footer>
    </div>
  )
}

export default AppLayout
