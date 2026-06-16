import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const approaches = [
  { name: 'Cognitive Behavioural Therapy (CBT)', desc: 'Including Trauma Focused CBT and CBT-E to support treatment of eating disorders.' },
  { name: 'Acceptance and Commitment Therapy (ACT)', desc: 'Building psychological flexibility and living in alignment with your values.' },
  { name: 'Dialectical Behavioural Therapy (DBT)', desc: 'Developing emotional regulation and distress tolerance skills for managing intense emotions.' },
  { name: 'Schema Therapy', desc: 'Exploring deeper patterns and beliefs that may be activated by parenthood.' },
]

const concerns = [
  'Fertility challenges and infertility',
  'IVF and assisted reproductive technology support',
  'Perinatal anxiety and depression',
  'Birth trauma and PTSD',
  'Pregnancy loss, stillbirth, and infant loss',
  'Grief and bereavement in the perinatal period',
  'Adjustment difficulties in pregnancy and new parenthood',
  'Relationship changes after baby',
  'Transition back to work',
  'Identity shifts and loss of self',
  'Intrusive thoughts',
  'Tokophobia (fear of childbirth)',
  'NICU and premature birth experiences',
  'Disordered eating and body image concerns',
  'Body weight and shape concerns in the perinatal period',
]

export default function IndividualTherapy() {
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
          }}>Individual Support</p>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.25rem',
          }}>Individual Therapy</h1>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            margin: '0 auto',
            maxWidth: '620px',
          }}>
            Evidence-based psychological support to help you thrive during the perinatal period and early parenthood.
          </p>
        </div>
      </section>

      {/* What to expect */}
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
            }}>What to Expect</h2>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#5C3520',
              lineHeight: 1.8,
              marginBottom: '1rem',
              textAlign: 'center',
            }}>
              Individual therapy offers a dedicated space to explore your experiences, challenges, and goals with a trained professional. Whether you're navigating fertility, pregnancy, postpartum adjustment, or any other perinatal concern, therapy provides evidence-based support tailored to your unique circumstances.
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
              A space where all your emotions are welcome — the joy, the doubt, the overwhelm, and everything in between. Emily works collaboratively to develop a personalised treatment plan tailored to your needs, drawing on evidence-based therapeutic approaches.
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
              Sessions are 50 minutes long and available in-person or via telehealth, making therapy accessible wherever you are in your journey.
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
              Book a Session <ArrowRight size={16} />
            </Link>
            </div>
          </div>

          {/* Practical info */}
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
                { label: 'Session Cost', value: '$265' },
                { label: 'Medicare Rebate', value: '$149.05 (from 1 July 2026)' },
                { label: 'Out-of-Pocket', value: '$115.95 (with valid Mental Health Care Plan)' },
                { label: 'Private Health', value: 'Accepted (check your fund)' },
                { label: 'First Session', value: 'Assessment & goal-setting' },
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
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    color: '#5C3520',
                  }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Care Plan Info */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#E4EFF7' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              color: '#3D2314',
              margin: 0,
            }}>How to Access a Mental Health Care Plan</h2>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 300,
              color: '#5C3520',
              marginTop: '1rem',
            }}>
              A Mental Health Care Plan (MHCP) gives you access to Medicare rebates for psychology sessions. Here's how to get one.
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            {[
              {
                step: '1',
                title: 'Visit Your GP',
                desc: 'Schedule an appointment with your general practitioner (GP) to discuss your mental health concerns and the support you need.',
              },
              {
                step: '2',
                title: 'Get a Referral',
                desc: 'Your GP will assess your needs and create a Mental Health Care Plan (MHCP), which includes a referral to a psychologist like Emily.',
              },
              {
                step: '3',
                title: 'Contact Us',
                desc: 'Bring your referral and contact Bloom Psychology Collective to book your first session. We will help you get started.',
              },
              {
                step: '4',
                title: 'Access Medicare Rebates',
                desc: 'With a valid MHCP, you will be eligible for Medicare rebates on your psychology sessions, reducing your out-of-pocket costs.',
              },
            ].map(item => (
              <div key={item.step} style={{
                backgroundColor: '#FAF6F0',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(196,181,165,0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#C8DDED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#3D2314',
                    }}>{item.step}</span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    color: '#3D2314',
                    margin: 0,
                  }}>{item.title}</h3>
                </div>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: '#5C3520',
                  lineHeight: 1.6,
                  margin: 0,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: '3rem',
            padding: '1.5rem',
            backgroundColor: '#FAF6F0',
            borderRadius: '12px',
            borderLeft: '4px solid #C4B5A5',
          }}>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 300,
              color: '#5C3520',
              lineHeight: 1.8,
              margin: 0,
            }}>
              <strong style={{ fontWeight: 600, color: '#3D2314' }}>Don't have a GP?</strong> You can find one through the Australian Medical Association or by searching online for GPs in your area. Many bulk-bill GPs are available, meaning there is no out-of-pocket cost for the appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Therapeutic approaches */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              color: '#3D2314',
              margin: 0,
            }}>Evidence-Based Approaches</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}>
            {approaches.map(a => (
              <div key={a.name} style={{
                backgroundColor: '#F2D9D5',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(196,181,165,0.2)',
              }}>
                <h4 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#3D2314',
                  marginTop: 0,
                  marginBottom: '0.5rem',
                }}>{a.name}</h4>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  color: '#5C3520',
                  lineHeight: 1.7,
                  margin: 0,
                }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of concern */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              color: '#3D2314',
              margin: 0,
            }}>Areas We Support</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0.75rem',
          }}>
            {concerns.map(c => (
              <div key={c} style={{
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
                }}>{c}</span>
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
          }}>Ready to bloom?</h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            Ready to start your therapeutic journey? Book your initial consultation with Emily today.
          </p>
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
