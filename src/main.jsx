import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './App'
import HomePage from './components/HomePage'
import FeaturesPage from './components/FeaturesPage'
import HowItWorks from './components/HowItWorks'
import DemoPage from './components/DemoPage'
import Pricing from './components/Pricing'
import TestimonialsPage from './components/TestimonialsPage'
import Contact from './components/Contact'
import AdminDashboard from './components/AdminDashboard'
import NotFound from './components/NotFound'
import Test from './Test'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}> 
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
