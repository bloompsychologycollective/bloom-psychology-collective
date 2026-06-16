import { Link } from 'react-router-dom'
import { Share2, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#3D2314',
      color: '#EDE6DF',
      padding: '3.5rem 1.5rem 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2.5rem',
        textAlign: 'center',
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.3rem',
            fontWeight: 600,
            color: '#F2D9D5',
            marginBottom: '0.25rem',
          }}>Bloom Psychology</div>
          <div style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 300,
            color: '#C4B5A5',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>Collective</div>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.88rem',
            fontWeight: 300,
            color: '#C4B5A5',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Compassionate, evidence-based perinatal mental health support for the journey into parenthood.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', justifyContent: 'center', alignItems: 'center' }}>
            <a href="https://instagram.com/bloompsychologycollective" aria-label="Instagram" style={{ color: '#F2D9D5', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}>
              <Share2 size={16} />
            </a>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 300,
              color: '#C4B5A5',
              margin: 0,
            }}>@bloompsychologycollective</p>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ textAlign: 'center' }}>
          <h4 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1rem',
            fontWeight: 500,
            color: '#F2D9D5',
            marginBottom: '1rem',
            marginTop: 0,
          }}>Services</h4>
          {[
            { label: 'Individual Therapy', path: '/individual-therapy' },
            { label: 'Postpartum Support', path: '/postpartum-support' },
            { label: 'Grief & Loss Support', path: '/individual-therapy' },
            { label: 'Group Programs', path: '/groups' },
            { label: 'Clinical Supervision', path: '/clinical-supervision' },
          ].map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                display: 'block',
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.88rem',
                fontWeight: 300,
                color: '#C4B5A5',
                textDecoration: 'none',
                marginBottom: '0.5rem',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div style={{ textAlign: 'center' }}>
          <h4 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1rem',
            fontWeight: 500,
            color: '#F2D9D5',
            marginBottom: '1rem',
            marginTop: 0,
          }}>Get in Touch</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem', justifyContent: 'center' }}>
            <Mail size={15} color="#C4B5A5" />
            <a href="mailto:emilydamourpsychology@gmail.com" style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.88rem',
              fontWeight: 300,
              color: '#C4B5A5',
              textDecoration: 'none',
            }}>emilydamourpsychology@gmail.com</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', justifyContent: 'center' }}>
            <Phone size={15} color="#C4B5A5" />
            <a href="tel:0466620977" style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.88rem',
              fontWeight: 300,
              color: '#C4B5A5',
              textDecoration: 'none',
            }}>0466 620 977</a>
          </div>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#C8DDED',
              color: '#3D2314',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.6rem 1.25rem',
              borderRadius: '50px',
              letterSpacing: '0.04em',
            }}
          >
            Book Appointment
          </Link>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '2.5rem auto 0',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(196,181,165,0.25)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: '0.78rem',
          fontWeight: 300,
          color: '#7A4A30',
          margin: 0,
        }}>
          © {new Date().getFullYear()} Bloom Psychology Collective. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
