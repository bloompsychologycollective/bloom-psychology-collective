import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Individual Therapy', path: '/individual-therapy' },
  { label: 'Postpartum Support', path: '/postpartum-support' },
  { label: 'Groups', path: '/groups' },
  { label: 'Clinical Supervision', path: '/clinical-supervision' },
  { label: 'About Emily', path: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const location = useLocation()

  return (
    <header style={{
      backgroundColor: '#FAF6F0',
      borderBottom: '1px solid #EDE6DF',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>
          <img 
            src="/logo.png" 
            alt="Bloom Psychology Collective" 
            style={{
              height: '50px',
              width: 'auto',
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 400,
                color: location.pathname === link.path ? '#3D2314' : '#7A4A30',
                textDecoration: 'none',
                padding: '0.4rem 0.65rem',
                borderRadius: '4px',
                borderBottom: location.pathname === link.path ? '2px solid #C4B5A5' : '2px solid transparent',
                transition: 'all 0.2s ease',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            style={{
              marginLeft: '0.75rem',
              backgroundColor: '#C8DDED',
              color: '#3D2314',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.55rem 1.1rem',
              borderRadius: '50px',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s ease',
            }}
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#3D2314',
            padding: '0.25rem',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          backgroundColor: '#FAF6F0',
          borderTop: '1px solid #EDE6DF',
          padding: '1rem 1.5rem 1.5rem',
        }} className="mobile-menu">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                fontFamily: "'Lato', sans-serif",
                fontSize: '1rem',
                fontWeight: location.pathname === link.path ? 700 : 300,
                color: '#3D2314',
                textDecoration: 'none',
                padding: '0.65rem 0',
                borderBottom: '1px solid #EDE6DF',
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              backgroundColor: '#C8DDED',
              color: '#3D2314',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.65rem 1.5rem',
              borderRadius: '50px',
              letterSpacing: '0.04em',
            }}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  )
}
