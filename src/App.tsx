import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import IndividualTherapy from './pages/IndividualTherapy'
import PrenatalGroup from './pages/PrenatalGroup'
import PostpartumSupport from './pages/PostpartumSupport'
import Groups from './pages/Groups'
import AboutEmily from './pages/AboutEmily'
import Contact from './pages/Contact'
import ClinicalSupervision from './pages/ClinicalSupervision'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/individual-therapy" element={<IndividualTherapy />} />
            <Route path="/prenatal-group" element={<PrenatalGroup />} />
            <Route path="/postpartum-support" element={<PostpartumSupport />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/about" element={<AboutEmily />} />
            <Route path="/clinical-supervision" element={<ClinicalSupervision />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
