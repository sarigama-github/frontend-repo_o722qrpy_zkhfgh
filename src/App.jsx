import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeaturesGrid'
import TechStack from './components/TechStack'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <TechStack />
        <Pricing />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Smart Krishi. All rights reserved.
      </footer>
    </div>
  )
}

export default App
