import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const signs = [
  'Persistent sadness, tearfulness, or emotional numbness',
  'Anxiety, panic attacks, or constant worry about your baby',
  'Difficulty bonding with your newborn',
  'Intrusive or frightening thoughts',
  'Feeling overwhelmed, isolated, or unable to cope',
  'Changes in appetite or sleep beyond normal newborn disruption',
  'Loss of interest in things you previously enjoyed',
  'Flashbacks or distress related to your birth experience',
  'Feeling like you are not a good enough parent',
  'Rage, irritability, or emotional dysregulation',
]

const supports = [
  {
    title: 'Postpartum Depression',
    desc: 'Compassionate, evidence-based treatment for postnatal depression, including therapy and psychoeducation.',
    bg: '#F9EDEB',
  },
  {
    title: 'Postpartum Anxiety',
    desc: 'Targeted support for the worry, hypervigilance, and panic that can accompany new parenthood.',
    bg: '#E4EFF7',
  },
  {
    title: 'Birth Trauma',
    desc: 'Trauma-informed therapy for difficult or traumatic birth experiences, including PTSD.',
    bg: '#EDE6DF',
  },
  {
    title: 'Bonding Difficulties',
    desc: 'Gentle, non-judgmental support to strengthen the parent-infant relationship.',
    bg: '#F9EDEB',
  },
  {
    title: 'Identity & Role Adjustment',
    desc: 'Exploring the profound identity shift of becoming a parent and finding your new sense of self.',
    bg: '#E4EFF7',
  },
  {
    title: 'Relationship Support',
    desc: 'Navigating changes in your partnership and family dynamics after the arrival of a new baby.',
    bg: '#EDE6DF',
  },
  {
    title: 'Disordered Eating & Body Image',
    desc: 'Support for postpartum eating concerns, body image struggles, and body weight and shape concerns.',
    bg: '#F9EDEB',
  },
]

export default function PostpartumSupport() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #EDE6DF 0%, #FAF6F0 100%)',
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
          }}>The Fourth Trimester</p>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.25rem',
          }}>Postpartum Support</h1>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            margin: '0 auto',
            maxWidth: '620px',
          }}>
            The postpartum period can be one of the most challenging times in a person's life. You deserve support, not just survival.
          </p>
        </div>
      </section>

      {/* Intro */}
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
            }}>You Are Not Alone</h2>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#5C3520',
              lineHeight: 1.8,
              marginBottom: '1rem',
              textAlign: 'center',
            }}>
              The postpartum period is a profound time of transition. Whether you're experiencing joy, overwhelm, grief, or any combination of emotions, your experience is valid and deserves support. Up to one in five new parents experience perinatal mental health challenges — you are not alone.
            </p>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#5C3520',
              lineHeight: 1.8,
              marginBottom: '1rem',
              textAlign: 'center',
            }}>
              We welcome all emotions — the joy, the overwhelm, the grief, the love, and everything in between. There is no "right way" to feel as a new parent, and all experiences — whether you're a first-time parent, a seasoned parent, a father, co-parent, or LGBTIQ+ family — are honoured and supported.
            </p>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#5C3520',
              lineHeight: 1.8,
              marginBottom: '1.75rem',
              textAlign: 'center',
            }}>
              It's never too late to seek support. Whether you're in the thick of the fourth trimester or reflecting on your journey months or years later, therapy can help you process your experiences and move forward with greater clarity and connection.
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
              Reach Out Today <ArrowRight size={16} />
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signs section */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              color: '#3D2314',
              margin: 0,
            }}>Signs You May Benefit from Support</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0.75rem',
          }}>
            {signs.map(s => (
              <div key={s} style={{
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
                }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of support */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#EDE6DF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              color: '#3D2314',
              margin: 0,
            }}>Areas of Postpartum Support</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}>
            {supports.map(s => (
              <div key={s.title} style={{
                backgroundColor: s.bg,
                borderRadius: '12px',
                padding: '1.75rem',
                border: '1px solid rgba(196,181,165,0.2)',
              }}>
                <h4 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: '#3D2314',
                  marginTop: 0,
                  marginBottom: '0.65rem',
                }}>{s.title}</h4>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#5C3520',
                  lineHeight: 1.7,
                  margin: 0,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistic */}
      <section style={{
        backgroundColor: '#C8DDED',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.88rem',
            fontWeight: 300,
            color: '#5C3520',
            marginBottom: '2rem',
          }}>Early intervention makes a real difference.</p>
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
            Book an Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
