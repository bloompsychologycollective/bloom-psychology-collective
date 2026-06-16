import { Link } from 'react-router-dom'
import { ArrowRight, Flower2, Heart, Users } from 'lucide-react'

const services = [
  {
    icon: <Heart size={28} color="#3D2314" />,
    title: 'Individual Therapy',
    desc: 'One-on-one support tailored to your journey.',
    path: '/individual-therapy',
    bg: '#F9EDEB',
  },
  {
    icon: <Users size={28} color="#3D2314" />,
    title: 'Perinatal & Postpartum Groups',
    desc: 'Connect and grow with others who understand.',
    path: '/groups',
    bg: '#E4EFF7',
    subOptions: ['Prenatal Group Program', 'Postnatal Support'],
  },
  {
    icon: <Heart size={28} color="#3D2314" />,
    title: 'Fertility & Loss Support',
    desc: 'Support through infertility, IVF, and loss.',
    path: '/individual-therapy',
    bg: '#F2D9D5',
  },
  {
    icon: <Flower2 size={28} color="#3D2314" />,
    title: 'Postpartum Support',
    desc: 'Care for the fourth trimester and beyond.',
    path: '/postpartum-support',
    bg: '#E4EFF7',
  },
  {
    icon: <Users size={28} color="#3D2314" />,
    title: 'Clinical Supervision',
    desc: 'AHPRA Board Approved supervision.',
    path: '/clinical-supervision',
    bg: '#F9EDEB',
  },
]



export default function Home() {
  return (
    <div>
      {/* Hero - Image Focused */}
      <section style={{
        background: 'linear-gradient(135deg, #F9EDEB 0%, #FAF6F0 100%)',
        padding: '1.5rem 1.5rem 4rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Logo at top */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '0.25rem', width: '100%' }}>
          <img 
            src="/logo.png" 
            alt="Bloom Psychology Collective" 
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '80px',
            }}
          />
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', width: '100%' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem',
          }} className="hero-grid">
            {/* Centered content */}
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 400,
                color: '#3D2314',
                lineHeight: 1.2,
                marginBottom: '1rem',
                marginTop: 0,
              }}>
                We support you to <em style={{ fontStyle: 'italic', color: '#5C3520', fontWeight: 500 }}>bloom</em><br />
                through every season of your perinatal journey.
              </h1>

              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                color: '#5C3520',
                lineHeight: 1.8,
                marginBottom: '2rem',
                maxWidth: '100%',
              }}>
                Bloom Psychology Collective offers compassionate, evidence-based psychological support for the perinatal period — from conception through to the early years of parenthood, including fertility, IVF, and donor journeys. We honour all experiences, whether joyful, challenging, or marked by loss.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" style={{
              backgroundColor: 'transparent',
              color: '#3D2314',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              padding: '0.9rem 2rem',
              borderRadius: '50px',
              border: '2px solid #3D2314',
              letterSpacing: '0.05em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}>
              Register Interest
            </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach banner - Chocolate brown sentence */}
      <section style={{
        backgroundColor: '#3D2314',
        padding: '2.5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            fontWeight: 400,
            color: '#FAF6F0',
            margin: 0,
            lineHeight: 1.6,
          }}>
            <em style={{ fontStyle: 'italic', fontWeight: 500 }}>Compassionate care</em> • <em style={{ fontStyle: 'italic', fontWeight: 500 }}>Evidence-based therapy</em> • <em style={{ fontStyle: 'italic', fontWeight: 500 }}>Perinatal focused</em> • <em style={{ fontStyle: 'italic', fontWeight: 500 }}>Personalised support</em>
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '3.5rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              fontWeight: 400,
              color: '#3D2314',
              margin: 0,
            }}>Services & Programs</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }} className="services-grid">
            {services.map(s => (
              <Link
                key={s.path}
                to={s.path}
                style={{
                  backgroundColor: s.bg,
                  borderRadius: '12px',
                  padding: '1.5rem 1.25rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(196,181,165,0.25)',
                  textAlign: 'center',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px rgba(61,35,20,0.08)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  color: '#3D2314',
                  marginTop: 0,
                  marginBottom: '0.5rem',
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  color: '#5C3520',
                  lineHeight: 1.5,
                  margin: 0,
                }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section style={{
        backgroundColor: '#F2D9D5',
        padding: '4rem 1.5rem',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#7A4A30',
            marginBottom: '1rem',
          }}>Coming Soon</p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 400,
            color: '#3D2314',
            margin: '0 0 1.5rem 0',
          }}>Group Programs Are About to Begin</h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            Our therapeutic group programs are coming soon. Register your interest to be among the first to know when spaces open. Whether you are preparing for birth or navigating the postpartum period, these carefully designed programs offer a supportive space to connect with others and develop practical coping strategies together.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/groups" style={{
              backgroundColor: '#3D2314',
              color: '#FAF6F0',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.9rem 2rem',
              borderRadius: '50px',
              letterSpacing: '0.05em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}>
              View Group Programs <ArrowRight size={16} />
            </Link>
            <Link to="/contact" style={{
              backgroundColor: '#3D2314',
              color: '#FAF6F0',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.9rem 2rem',
              borderRadius: '50px',
              letterSpacing: '0.05em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              border: 'none',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(61,35,20,0.15)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}>
              Register Interest
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Emily */}
      <section style={{
        backgroundColor: '#FAF6F0',
        padding: '6rem 1.5rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }} className="emily-grid">
            <div>
              <img 
                src="/emily.jpg" 
                alt="Emily D'Amour, Clinical Psychologist" 
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 12px 35px rgba(61,35,20,0.1)',
                }}
              />
            </div>
            <div>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#7A4A30',
                marginBottom: '1rem',
              }}>Meet Your Psychologist</p>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 400,
                color: '#3D2314',
                margin: '0 0 1.5rem 0',
                lineHeight: 1.2,
              }}>
                Emily D'Amour,<br />
                <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Clinical Psychologist</em>
              </h2>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                color: '#5C3520',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}>
                Emily is a registered Clinical Psychologist with a clinical interest in perinatal mental health. She is passionate about supporting individuals and families through the transformative — and sometimes challenging — journey of becoming a parent.
              </p>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                color: '#5C3520',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}>
                Emily creates a warm, non-judgmental space for all parents and partners — including fathers, co-parents, and LGBTIQ+ families — where clients feel truly heard and supported.
              </p>
              <Link to="/about" style={{
                backgroundColor: '#3D2314',
                color: '#FAF6F0',
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 700,
                textDecoration: 'none',
                padding: '0.9rem 2rem',
                borderRadius: '50px',
                letterSpacing: '0.05em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
              }}>
                Learn More About Emily <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* If You Need Immediate Support */}
      <section style={{
        backgroundColor: '#EDE6DF',
        padding: '3rem 1.5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.2rem',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '0.75rem',
          }}>If You Need Immediate Support</h3>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.9rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.7,
            marginBottom: '1rem',
          }}>
            If you are in crisis or need immediate mental health support, please contact one of the following services:
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
          }}>
            {[
              { name: 'Lifeline', number: '13 11 14' },
              { name: 'PANDA', number: '1300 726 306' },
              { name: 'Beyond Blue', number: '1300 22 4636' },
              { name: 'Emergency', number: '000' },
            ].map(r => (
              <div key={r.name} style={{
                backgroundColor: '#FAF6F0',
                borderRadius: '10px',
                padding: '0.75rem 1.25rem',
                textAlign: 'center',
              }}>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#7A4A30',
                  margin: '0 0 0.15rem',
                  letterSpacing: '0.08em',
                }}>{r.name}</p>
                <a href={`tel:${r.number.replace(/\s/g, '')}`} style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#3D2314',
                  textDecoration: 'none',
                }}>{r.number}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Information */}
      <section style={{
        backgroundColor: '#E4EFF7',
        padding: '4rem 1.5rem',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#7A4A30',
            marginBottom: '0.75rem',
            marginTop: 0,
          }}>Location</p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.5rem',
          }}>Rivers of Yarrambat</h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            margin: '0 auto',
            maxWidth: '700px',
          }}>
            Bloom Psychology Collective is located at the Health + Wellness precinct at Rivers of Yarrambat. The wellness precinct is situated at the back of the property behind the cafe. Please drive towards the rear of the property where ample unmetered parking is available. All abilities and pram access is also available due to ramps.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: '#F2D9D5',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 400,
            color: '#3D2314',
            margin: '0 0 1.5rem 0',
          }}>Ready to take the first step?</h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            Reaching out is an act of courage. We are here to support you — wherever you are in your journey.
          </p>
          <Link to="/contact" style={{
            backgroundColor: '#3D2314',
            color: '#FAF6F0',
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.95rem',
            fontWeight: 700,
            textDecoration: 'none',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            letterSpacing: '0.05em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            transition: 'all 0.3s ease',
          }}>
            Book Your Appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
