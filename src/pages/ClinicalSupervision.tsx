import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const superviseeTypes = [
  'Psychology students enrolled in registrar programs',
  'Early-career psychologists',
  'Established psychologists seeking specialist consultation',
]

const supervisoryFocus = [
  'Case conceptualisation and treatment planning',
  'Clinical skill development and refinement',
  'Perinatal mental health clinical interest',
  'Evidence-based therapeutic approaches',
  'Professional development and reflective practice',
  'Ethical and professional issues',
  'Self-care and preventing burnout',
]

export default function ClinicalSupervision() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #F9EDEB 0%, #FAF6F0 100%)',
        padding: '4.5rem 1.5rem 3.5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#7A4A30',
            marginBottom: '1rem',
          }}>Professional Development</p>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.25rem',
          }}>Clinical Supervision</h1>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            margin: '0 auto',
            maxWidth: '620px',
          }}>
            AHPRA Board Approved Supervisor. Comprehensive clinical supervision for psychology students, early-career psychologists, and established practitioners.
          </p>
        </div>
      </section>

      {/* About supervision */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              color: '#3D2314',
              marginTop: 0,
              marginBottom: '1.25rem',
            }}>What is Clinical Supervision?</h2>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#5C3520',
              lineHeight: 1.8,
              marginBottom: '1.75rem',
              textAlign: 'center',
            }}>
              Clinical supervision is a collaborative space to reflect on your work, explore complex cases, and develop your clinical skills. Emily brings a clinical interest in perinatal mental health and evidence-based supervisory practice, tailored to your developmental stage and professional goals.
            </p>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Link to="/contact" style={{
              backgroundColor: '#3D2314',
              color: '#FAF6F0',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '50px',
              letterSpacing: '0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              Enquire About Supervision <ArrowRight size={16} />
            </Link>
            </div>
          </div>

          {/* Session info */}
          <div style={{
            backgroundColor: '#E4EFF7',
            borderRadius: '16px',
            padding: '2rem',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.3rem',
              fontWeight: 500,
              color: '#3D2314',
              marginTop: 0,
              marginBottom: '1.5rem',
            }}>Session Information</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem 1rem',
            }}>
              {[
                { label: 'Session Length', value: '50 minutes' },
                { label: 'Format', value: 'In-person & Telehealth' },
                { label: 'Frequency', value: 'Flexible scheduling' },
                { label: 'Supervisor Status', value: 'AHPRA Board Approved' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                }}>
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#3D2314',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>{item.label}</span>
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: '#5C3520',
                  }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who is supervision for */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#EDE6DF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              color: '#3D2314',
              margin: 0,
            }}>Who Supervision is For</h2>
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
          }}>
            {superviseeTypes.map(type => (
              <div key={type} style={{
                backgroundColor: '#FAF6F0',
                borderRadius: '50px',
                padding: '0.6rem 1rem',
                border: '1px solid rgba(196,181,165,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}>
                <CheckCircle2 size={14} color="#C4B5A5" style={{ flexShrink: 0 }} />
                <span style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#3D2314',
                  whiteSpace: 'nowrap',
                }}>{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervisory focus */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              color: '#3D2314',
              margin: 0,
            }}>Supervisory Focus</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0.75rem',
          }}>
            {supervisoryFocus.map(focus => (
              <div key={focus} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <CheckCircle2 size={16} color="#C4B5A5" style={{ flexShrink: 0 }} />
                <span style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: '#3D2314',
                }}>{focus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: '#F2D9D5',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1rem',
          }}>Ready to enhance your clinical practice?</h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            Ready to enhance your clinical practice? Enquire about supervision with Emily today.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" style={{
              backgroundColor: '#3D2314',
              color: '#FAF6F0',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '50px',
              letterSpacing: '0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(61,35,20,0.15)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}>
              Book a Session <ArrowRight size={16} />
            </Link>
            <Link to="/contact" style={{
              backgroundColor: 'transparent',
              color: '#3D2314',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '50px',
              border: '2px solid #C4B5A5',
              letterSpacing: '0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#F2D9D5'
              ;(e.currentTarget as HTMLElement).style.borderColor = '#C4B5A5'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
            }}>
              Enquire About Supervision
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
