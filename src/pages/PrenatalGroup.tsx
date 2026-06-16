import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Users, Sparkles, Clock } from 'lucide-react'

const modules = [
  { num: '01', title: 'Understanding the Perinatal Mind', desc: 'Explore the psychological changes of pregnancy and what to expect emotionally as you approach birth.' },
  { num: '02', title: 'Managing Anxiety & Worry', desc: 'Evidence-based strategies to reduce pregnancy anxiety and build a calmer, more grounded mindset.' },
  { num: '03', title: 'Birth Preparation & Mindset', desc: 'Psychological tools to approach birth with confidence, flexibility, and self-compassion.' },
  { num: '04', title: 'Relationship Transitions', desc: 'Navigating changes in your partnership, identity, and support network as you become a parent.' },
  { num: '05', title: 'Building Your Village', desc: 'Identifying and strengthening your support systems before baby arrives.' },
  { num: '06', title: 'Preparing for the Fourth Trimester', desc: 'Setting realistic expectations and a self-care plan for the postpartum period.' },
]

export default function PrenatalGroup() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #E4EFF7 0%, #FAF6F0 100%)',
        padding: '4.5rem 1.5rem 3.5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#3D2314',
            color: '#FAF6F0',
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '0.35rem 1rem',
            borderRadius: '50px',
            marginBottom: '1.25rem',
          }}>
            Starting Soon
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.25rem',
          }}>Prenatal Group Program</h1>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            margin: '0 auto',
            maxWidth: '620px',
          }}>
            A psychologist-led group program designed to support all expectant parents and partners through the emotional and psychological journey of pregnancy and birth preparation.
          </p>
        </div>
      </section>

      {/* Overview cards */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
          marginBottom: '4rem',
        }}>
          {[
            { icon: <Calendar size={24} color="#7A4A30" />, label: 'Format', value: '6-week program' },
            { icon: <Clock size={24} color="#7A4A30" />, label: 'Session Length', value: '90 minutes each' },
            { icon: <Users size={24} color="#7A4A30" />, label: 'Group Size', value: 'Small group (max 8)' },
            { icon: <Sparkles size={24} color="#7A4A30" />, label: 'Delivery', value: 'In-person & Online' },
          ].map(item => (
            <div key={item.label} style={{
              backgroundColor: '#E4EFF7',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
            }}>
              <div style={{ marginBottom: '0.65rem' }}>{item.icon}</div>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#7A4A30',
                margin: '0 0 0.25rem',
              }}>{item.label}</p>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1rem',
                fontWeight: 500,
                color: '#3D2314',
                margin: 0,
              }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* About the program */}
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.25rem',
          }}>About the Program</h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            marginBottom: '1rem',
          }}>
            The Bloom Prenatal Group Program is a structured, evidence-based program facilitated by Clinical Psychologist Emily D'Amour. It brings together small groups of expectant parents to explore the psychological and emotional dimensions of pregnancy and impending parenthood.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
          }}>
            Grounded in CBT, ACT, and mindfulness principles, the program provides practical tools alongside the invaluable support of shared experience — because sometimes knowing you are not alone makes all the difference.
          </p>
        </div>
      </section>

      {/* Program modules */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#EDE6DF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              color: '#3D2314',
              margin: 0,
            }}>Program Modules</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}>
            {modules.map(m => (
              <div key={m.num} style={{
                backgroundColor: '#FAF6F0',
                borderRadius: '12px',
                padding: '1.75rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#C4B5A5',
                  lineHeight: 1,
                  flexShrink: 0,
                }}>{m.num}</span>
                <div>
                  <h4 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#3D2314',
                    marginTop: 0,
                    marginBottom: '0.5rem',
                  }}>{m.title}</h4>
                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    color: '#5C3520',
                    lineHeight: 1.7,
                    margin: 0,
                  }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.25rem',
          }}>Who Is This Program For?</h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            marginBottom: '1rem',
          }}>
            This program is open to anyone in their second or third trimester who would like psychological support and preparation for birth and early parenthood. It is suitable for first-time parents, same-sex couples, LGBTIQ+ families, and those who have experienced previous pregnancy loss or difficult birth experiences.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            All partners, co-parents, and support people are warmly welcome to attend.
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
            }}>
              Register Interest <ArrowRight size={16} />
            </Link>
            <Link to="/groups" style={{
              backgroundColor: 'transparent',
              color: '#3D2314',
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 400,
              textDecoration: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '50px',
              border: '1.5px solid #C4B5A5',
              letterSpacing: '0.04em',
            }}>
              View All Groups
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
