import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function AboutEmily() {
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
          }}>Meet Your Psychologist</p>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '0.5rem',
          }}>Emily D'Amour</h1>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 400,
            color: '#5C3520',
            letterSpacing: '0.05em',
            margin: '0.5rem 0 0',
          }}>(she/her)</p>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.95rem',
            fontWeight: 300,
            color: '#7A4A30',
            letterSpacing: '0.08em',
            marginTop: '0.75rem',
          }}>BA (Psych), Grad Dip (Psych), M. Psych (Clinical), MAPS</p>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: '#5C3520',
            marginTop: '1rem',
            fontWeight: 400,
          }}>Clinical Psychologist</p>
        </div>
      </section>

      {/* Photo and intro */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start',
        }}>
          {/* Photo */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            aspectRatio: '3/4',
            minHeight: '400px',
            boxShadow: '0 10px 40px rgba(61,35,20,0.12)',
          }}>
            <img 
              src="/emily.jpg" 
              alt="Emily D'Amour, Clinical Psychologist" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Bio */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 400,
              color: '#3D2314',
              marginTop: 0,
              marginBottom: '1.5rem',
            }}>Background</h2>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#5C3520',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
            }}>
              Emily D'Amour is a Clinical Psychologist with specific expertise in perinatal mental health. Emily completed undergraduate and postgraduate training in Psychology at Monash University and Deakin University, and completed a Masters of Clinical Psychology at Federation University in 2013.
            </p>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#5C3520',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
            }}>
              Emily worked as a provisional psychologist at the Royal Children's Hospital where she conducted assessment and treatment of children with complex neurodevelopmental disorders. Emily has also worked at the Austin Statewide Child Inpatient Unit and within this role she completed assessment and treatment of parents and their vulnerable children with acute mental health concerns. Emily also has experience working at Headspace as a private practitioner, which further developed her capacity to treat mental health conditions across the lifespan.
            </p>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: '#5C3520',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
            }}>
              These previous positions solidified Emily's passion for perinatal mental health and her clinical interest in enhancing the mental health of expectant and new parents. Through her experience in these settings, Emily saw the importance of intervention in the perinatal period in order to circumvent many of the mental health challenges experienced by people later in life.
            </p>
          </div>
        </div>
      </section>

      {/* Current practice */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#EDE6DF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 400,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}>Current Practice</h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.85,
            marginBottom: '1.25rem',
          }}>
            In Emily's private practice in Yarrambat, she provides tailored and individualised therapy to individuals, couples, and families. She has a clinical interest in supporting all parents and partners through the entire perinatal journey — from fertility and IVF to pregnancy, birth, and early parenthood. Her areas of clinical interest include fertility challenges, infertility, and assisted reproductive technology (ART), supporting clients through the emotional complexity of conception journeys. She also provides expert support for depression and anxiety (with a special interest in obsessive-compulsive disorder and perfectionism), eating disorders and body image concerns, and therapy to address both past and birth-related trauma. Emily supports individuals and couples of all genders and orientations through pregnancy loss, stillbirth, and infant loss, and has a clinical interest in supporting people through grief and bereavement as part of the perinatal journey.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.85,
          }}>
            Emily supports her clients to adjust to their new roles as parents, and to connect, attune and understand the inner worlds of their babies, toddlers and young children. She also supports those navigating the profound grief of loss at any stage of the perinatal journey.
          </p>
        </div>
      </section>

      {/* Approach to therapy */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FAF6F0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 400,
            color: '#3D2314',
            marginTop: 0,
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}>Approach to Therapy</h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.85,
            marginBottom: '1.25rem',
          }}>
            Emily has a warm, empathic and collaborative approach to therapy. She works with clients to help them recognise intergenerational patterns that may be contributing to their challenges. Emily supports clients to understand the sources of their difficulties in order to empower them to move forward and make positive changes in their lives.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.85,
          }}>
            Emily utilises a range of therapeutic approaches embedded within a psychodynamic and family systems theoretical framework, which draws upon understanding how an individual's past experiences and family of origin may contribute to their perception of current stressors. Emily uses Cognitive Behavioural Therapy (CBT); including Trauma Focused CBT and CBT-E to support treatment of eating disorders, Acceptance and Commitment Therapy (ACT), Dialectical Behavioural Therapy (DBT) and Schema Therapy.
          </p>
        </div>
      </section>

      {/* Hours and contact */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#E4EFF7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
          }}>
            {/* Hours */}
            <div style={{
              backgroundColor: '#FAF6F0',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(196,181,165,0.2)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Clock size={24} color="#C4B5A5" />
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  color: '#3D2314',
                  margin: 0,
                }}>Hours</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { day: 'Monday', time: 'am, pm' },
                  { day: 'Tuesday', time: 'am' },
                  { day: 'Thursday', time: 'am, pm' },
                  { day: 'Friday', time: 'am, pm' },
                ].map(slot => (
                  <div key={slot.day} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(196,181,165,0.2)',
                  }}>
                    <span style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: '#3D2314',
                    }}>{slot.day}</span>
                    <span style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 300,
                      color: '#5C3520',
                    }}>{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div style={{
              backgroundColor: '#FAF6F0',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(196,181,165,0.2)',
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.3rem',
                fontWeight: 500,
                color: '#3D2314',
                marginTop: 0,
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>Contact</h3>
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexDirection: 'column', textAlign: 'center' }}>
                <MapPin size={20} color="#C4B5A5" style={{ flexShrink: 0 }} />
                <div>
                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    color: '#5C3520',
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    28 Kurrak Road<br />
                    Yarrambat, VIC 3091
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexDirection: 'column', textAlign: 'center' }}>
                <Phone size={20} color="#C4B5A5" style={{ flexShrink: 0 }} />
                <a href="tel:0466620977" style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: '#5C3520',
                  textDecoration: 'none',
                }}>0466 620 977</a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexDirection: 'column', textAlign: 'center' }}>
                <Mail size={20} color="#C4B5A5" style={{ flexShrink: 0 }} />
                <a href="mailto:emilydamourpsychology@gmail.com" style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: '#5C3520',
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                }}>emilydamourpsychology@gmail.com</a>
              </div>

              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 300,
                color: '#7A4A30',
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(196,181,165,0.2)',
                textAlign: 'center',
              }}>Fax: 03 5947 5081</p>
            </div>

            {/* Professional affiliations */}
            <div style={{
              backgroundColor: '#FAF6F0',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(196,181,165,0.2)',
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.3rem',
                fontWeight: 500,
                color: '#3D2314',
                marginTop: 0,
                marginBottom: '1.5rem',
              }}>Professional Affiliations</h3>
              <ul style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 300,
                color: '#5C3520',
                lineHeight: 1.85,
                margin: 0,
                paddingLeft: '1.5rem',
              }}>
                <li>Registered with the Psychology Board of Australia</li>
                <li>Member of the Australian Psychological Society (MAPS)</li>
                <li>Member of the APS Perinatal and Infant Psychology Interest Group (PIPIG)</li>
                <li>Registered with The Perinatal Loss Centre</li>
              </ul>
            </div>

            {/* APPN Membership */}
            <div style={{
              backgroundColor: '#FAF6F0',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(196,181,165,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
              <img 
                src="/appn.png" 
                alt="APPN - Antenatal & Postnatal Psychology Network" 
                style={{
                  height: '90px',
                  width: 'auto',
                  marginBottom: '1rem',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* APS Member Logo */}
            <div style={{
              backgroundColor: '#FAF6F0',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(196,181,165,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
              <img 
                src="/aps.jpg" 
                alt="APS Member - Australian Psychological Society" 
                style={{
                  height: '90px',
                  width: 'auto',
                  marginBottom: '1rem',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: '#3D2314',
        padding: '5rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 400,
            color: '#F2D9D5',
            marginTop: 0,
            marginBottom: '1.25rem',
          }}>
            Ready to begin your journey?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1.05rem',
            fontWeight: 300,
            color: '#C4B5A5',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}>
            Contact Emily today to book your initial consultation. In-person and telehealth options available.
          </p>
          <Link to="/contact" style={{
            backgroundColor: '#C8DDED',
            color: '#3D2314',
            fontFamily: "'Lato', sans-serif",
            fontSize: '1rem',
            fontWeight: 700,
            textDecoration: 'none',
            padding: '1.1rem 2.75rem',
            borderRadius: '50px',
            letterSpacing: '0.05em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#B8CCDD'
            ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#C8DDED'
            ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
          }}>
            Book Your Appointment <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
