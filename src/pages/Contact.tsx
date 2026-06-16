import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferred: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Send form data to Basin
      const response = await fetch('https://usebasin.com/f/e9e7b8c4b8c1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          preferred_contact: form.preferred,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setForm({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          preferred: '',
        })
      } else {
        setError('Failed to send enquiry. Please try again or contact Emily directly.')
      }
    } catch (err) {
      setError('Failed to send enquiry. Please try again or contact Emily directly.')
      console.error('Form error:', err)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: '10px',
    border: '1.5px solid #EDE6DF',
    backgroundColor: '#FAF6F0',
    fontFamily: "'Lato', sans-serif",
    fontSize: '0.95rem',
    fontWeight: 300,
    color: '#3D2314',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'Lato', sans-serif",
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#5C3520',
    letterSpacing: '0.08em',
    marginBottom: '0.4rem',
  }

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
          }}>Book an Appointment</h1>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '1.05rem',
            fontWeight: 300,
            color: '#5C3520',
            lineHeight: 1.8,
            margin: '0 auto',
            maxWidth: '560px',
          }}>
            Taking the first step is the hardest part. We are here to make it as easy and welcoming as possible.
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
              { icon: <MapPin size={20} color="#7A4A30" />, label: 'Location', value: '28 Kurrak Road, Yarrambat, VIC 3091', href: undefined },
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
                    }}>{item.value}</a>
                  ) : (
                    <p style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 300,
                      color: '#3D2314',
                      margin: 0,
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
                'Reduced fee options available — please enquire',
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

          {/* Form */}
          <div>
            {submitted ? (
              <div style={{
                backgroundColor: '#F9EDEB',
                borderRadius: '20px',
                padding: '3rem',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#EDE6DF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <CheckCircle2 size={32} color="#7A4A30" />
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.6rem',
                  fontWeight: 500,
                  color: '#3D2314',
                  marginTop: 0,
                  marginBottom: '0.75rem',
                }}>Thank you for reaching out.</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: '#5C3520',
                  lineHeight: 1.8,
                  margin: 0,
                }}>
                  Emily will be in touch within 1–2 business days to confirm your appointment or discuss your enquiry. We look forward to supporting you.
                </p>
              </div>
            ) : (
              <div style={{
                backgroundColor: '#F9EDEB',
                borderRadius: '20px',
                padding: '2.5rem',
              }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.6rem',
                  fontWeight: 500,
                  color: '#3D2314',
                  marginTop: 0,
                  marginBottom: '1.75rem',
                }}>Enquiry & Booking Form</h2>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-row">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-row">
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="04XX XXX XXX"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Preferred Contact</label>
                      <select
                        name="preferred"
                        value={form.preferred}
                        onChange={handleChange}
                        style={inputStyle}
                      >
                        <option value="">Select...</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="either">Either</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={labelStyle}>Service of Interest *</label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Select a service...</option>
                      <option value="individual">Individual Therapy</option>
                      <option value="prenatal-group">Prenatal Group Program</option>
                      <option value="postpartum">Postpartum Support</option>
                      <option value="postpartum-group">Postpartum Group Program</option>
                      <option value="loss-group">After Loss Group</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={labelStyle}>Tell Us a Little About What You're Looking For</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Share as much or as little as you'd like..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    />
                  </div>

                  {error && (
                    <div style={{
                      backgroundColor: '#F2D9D5',
                      borderRadius: '10px',
                      padding: '1rem',
                      marginBottom: '1rem',
                      color: '#7A4A30',
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '0.9rem',
                    }}>
                      {error}
                    </div>
                  )}

                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 300,
                    color: '#7A4A30',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}>
                    Your privacy is important to us. All information shared is confidential and handled in accordance with Australian Privacy Principles.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: '100%',
                      backgroundColor: loading ? '#C4B5A5' : '#3D2314',
                      color: '#FAF6F0',
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      border: 'none',
                      padding: '1rem',
                      borderRadius: '50px',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      letterSpacing: '0.06em',
                      transition: 'background-color 0.2s',
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              </div>
            )}
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
