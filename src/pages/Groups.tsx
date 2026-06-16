import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Users, Calendar, MapPin } from 'lucide-react'

const groups = [
  {
    badge: 'Prenatal',
    title: 'Prenatal Group Program',
    desc: 'Bringing Baby Home: A research-based workshop for expectant couples. This Gottman Institute program helps parents strengthen their relationship, maintain relationship satisfaction, reduce conflict, and prepare for the transition to parenthood with evidence-based strategies and support.',
    details: [
      { icon: <Calendar size={15} />, text: 'Commencing in late 2026' },
      { icon: <Clock size={15} />, text: '6 week program' },
      { icon: <Users size={15} />, text: 'Max 8 participants' },
      { icon: <MapPin size={15} />, text: 'In-person & Online' },
    ],
    bg: '#E4EFF7',
    badgeBg: '#C8DDED',
    path: '/prenatal-group',
  },
  {
    badge: 'Postpartum',
    title: 'New Parent Support Group',
    desc: 'A 6-week therapeutic group for parents in the first year postpartum. A safe, facilitated space to share experiences, build connection, and develop practical coping strategies for the challenges of new parenthood.',
    details: [
      { icon: <Calendar size={15} />, text: 'Coming Soon' },
      { icon: <Clock size={15} />, text: '6 weeks · 90 min sessions' },
      { icon: <Users size={15} />, text: 'Max 8 participants' },
      { icon: <MapPin size={15} />, text: 'In-person & Online' },
      { icon: <Users size={15} />, text: 'Babies are welcome' },
    ],
    bg: '#F9EDEB',
    badgeBg: '#F2D9D5',
    path: '/postpartum-support',
  },
]

export default function Groups() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #F2D9D5 0%, #E4EFF7 100%)',
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
            Group Programs
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.25rem',
          }}>Therapeutic Group Programs</h1>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            margin: '0 auto',
            maxWidth: '620px',
            textAlign: 'center',
          }}>
            There is profound power in shared experience. Our psychologist-led group programs offer a safe, nurturing space to connect with others who truly understand — whether you are preparing for parenthood or navigating the early years of parenthood.
          </p>
        </div>
      </section>

      {/* Why groups */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.25rem',
          }}>The Power of Group Therapy</h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
          }}>
Our small, facilitated groups are led by Clinical Psychologist Emily D'Amour and grounded in evidence-based frameworks. Every participant is seen and supported.
          </p>
        </div>
      </section>

      {/* Group listings */}
      <section style={{ padding: '2rem 1.5rem 5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {groups.map(g => (
              <div key={g.title} style={{
                backgroundColor: g.bg,
                borderRadius: '20px',
                padding: '2.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                alignItems: 'start',
                border: '1px solid rgba(196,181,165,0.2)',
              }}>
                <div>
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: g.badgeBg,
                    color: '#3D2314',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.85rem',
                    borderRadius: '50px',
                    marginBottom: '1rem',
                  }}>{g.badge}</span>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    color: '#3D2314',
                    marginTop: 0,
                    marginBottom: '0.85rem',
                  }}>{g.title}</h3>
                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    color: '#5C3520',
                    lineHeight: 1.75,
                    margin: 0,
                  }}>{g.desc}</p>
                </div>
                <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    {g.details.map((d, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        marginBottom: '0.6rem',
                        color: '#5C3520',
                      }}>
                        <span style={{ color: '#7A4A30', flexShrink: 0 }}>{d.icon}</span>
                        <span style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '0.9rem',
                          fontWeight: 300,
                          color: '#3D2314',
                        }}>{d.text}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" style={{
                    backgroundColor: '#3D2314',
                    color: '#FAF6F0',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '50px',
                    letterSpacing: '0.04em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    Register Interest <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#EDE6DF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              color: '#3D2314',
              margin: 0,
            }}>Frequently Asked Questions</h2>
          </div>
          {[
            {
              q: 'Do I need a referral to join a group?',
              a: 'No referral is required. Simply contact us to register your interest and we will be in touch to discuss whether the group is a good fit for you.',
            },
            {
              q: 'Are Medicare rebates available for group programs?',
              a: 'Medicare rebates may be available for group therapy sessions with a valid Mental Health Care Plan. Please contact us to discuss your individual circumstances.',
            },
            {
              q: 'What if I miss a session?',
              a: 'We understand that life with a baby or during pregnancy can be unpredictable. We ask that participants commit to attending as many sessions as possible. We will discuss any concerns during the intake process.',
            },
            {
              q: 'Can I attend both a group and individual therapy?',
              a: 'Absolutely. Many clients find that combining group and individual therapy provides comprehensive support. Emily can help you determine the best approach for your needs.',
            },
          ].map((faq, i) => (
            <div key={i} style={{
              backgroundColor: '#FAF6F0',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1rem',
            }}>
              <h4 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1rem',
                fontWeight: 500,
                color: '#3D2314',
                marginTop: 0,
                marginBottom: '0.65rem',
              }}>{faq.q}</h4>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 300,
                color: '#5C3520',
                lineHeight: 1.7,
                margin: 0,
              }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
