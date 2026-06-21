import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #E4EFF7 0%, #FAF6F0 100%)',
        padding: '4.5rem 1.5rem 3.5rem',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#7A4A30',
            marginBottom: '1rem',
          }}>Get in Touch</p>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.25rem',
          }}>Contact Information</h1>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1.05rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            margin: '0 auto',
            maxWidth: '560px',
          }}>
            Reach out to Bloom Psychology Collective to discuss how we can support you on your mental health journey.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start',
        }}>
          {/* Contact info */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.8rem',
              fontWeight: 500,
              color: '#3D2314',
              marginTop: 0,
              marginBottom: '1.5rem',
            }}>Contact Information</h2>

            {[
              { icon: <Mail size={20} color="#7A4A30" />, label: 'Email', value: 'emilydamourpsychology@gmail.com', href: 'mailto:emilydamourpsychology@gmail.com' },
              { icon: <Phone size={20} color="#7A4A30" />, label: 'Phone', value: '0466 620 977', href: 'tel:0466620977' },
              { icon: <MapPin size={20} color="#7A4A30" />, label: 'Location', value: 'Rivers of Yarrambat\nHealth + Wellness Precinct\n28 Kurrak Road\nYARRAMBAT VIC 3091', href: undefined },
              { icon: <Clock size={20} color="#7A4A30" />, label: 'Hours', value: 'Mon & Fri: am, pm · Tue & Thu: am', href: undefined },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1.5rem',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#EDE6DF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#7A4A30',
                    margin: '0 0 0.2rem',
                  }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 300,
                      color: '#3D2314',
                      textDecoration: 'none',
                      whiteSpace: 'pre-line',
                    }}>{item.value}</a>
                  ) : (
                    <p style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 300,
                      color: '#3D2314',
                      margin: 0,
                      whiteSpace: 'pre-line',
                    }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Medicare info */}
            <div style={{
              backgroundColor: '#E4EFF7',
              borderRadius: '16px',
              padding: '1.5rem',
              marginTop: '1rem',
            }}>
              <h4 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1rem',
                fontWeight: 500,
                color: '#3D2314',
                marginTop: 0,
                marginBottom: '0.75rem',
              }}>Medicare & Fees</h4>
              {[
                'Medicare rebates available with a Mental Health Care Plan (MHCP)',
                'GP referral required for Medicare rebates',
                'Private health insurance accepted',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}>
                  <CheckCircle2 size={15} color="#7A4A30" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    color: '#3D2314',
                    lineHeight: 1.6,
                  }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Location Information */}
            <div style={{
              backgroundColor: '#E4EFF7',
              borderRadius: '16px',
              padding: '1.5rem',
              marginTop: '1rem',
            }}>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#7A4A30',
                margin: '0 0 0.5rem',
              }}>Location & Availability</p>
              
              {/* Telehealth Option */}
              <div style={{
                backgroundColor: '#FAF6F0',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1rem',
                borderLeft: '4px solid #7A4A30',
              }}>
                <h4 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#3D2314',
                  marginTop: 0,
                  marginBottom: '0.5rem',
                }}>Telehealth Available</h4>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  color: '#3D2314',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  Online sessions available for your convenience. Connect from home or anywhere that works for you.
                </p>
              </div>
              
              {/* In-Person Location */}
              <h4 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1rem',
                fontWeight: 500,
                color: '#3D2314',
                marginTop: 0,
                marginBottom: '0.75rem',
              }}>In-Person: Rivers of Yarrambat</h4>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.88rem',
                fontWeight: 300,
                color: '#3D2314',
                lineHeight: 1.6,
                margin: 0,
              }}>
                Bloom Psychology Collective is located at the Health + Wellness precinct at Rivers of Yarrambat. The wellness precinct is situated at the back of the property behind the café. Please drive towards the rear of the property where ample unmetered parking is available. All abilities and pram access is also available due to ramps.
              </p>
            </div>
          </div>

          {/* Contact CTA Box */}
          <div>
            <div style={{
              backgroundColor: '#F9EDEB',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
            }}>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.6rem',
                fontWeight: 500,
                color: '#3D2314',
                marginTop: 0,
                marginBottom: '1.5rem',
              }}>Ready to Get Started?</h2>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                color: '#5C3520',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}>
                Reach out to Emily directly to discuss your needs and book your first session.
              </p>
              
              <a 
                href="mailto:emilydamourpsychology@gmail.com"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#3D2314',
                  color: '#FAF6F0',
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s',
                  marginBottom: '1rem',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5C3520'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D2314'}
              >
                Send an Enquiry
              </a>

              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 300,
                color: '#7A4A30',
                lineHeight: 1.6,
                marginTop: '1.5rem',
              }}>
                Or call <a href="tel:0466620977" style={{ color: '#3D2314', textDecoration: 'none', fontWeight: 500 }}>0466 620 977</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis resources */}
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
    </div>
  )
}
