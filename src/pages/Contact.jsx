import { useState } from 'react';
import { contactInfo } from '../data/contactInfo';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email subject
    const subject = encodeURIComponent(
      formData.service
        ? `New Inquiry: ${formData.service} - ${formData.name}`
        : `New Inquiry from ${formData.name}`
    );

    // Create email body with form data
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Company: ${formData.company || 'Not provided'}\n` +
      `Service of Interest: ${formData.service || 'Not specified'}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open mailto link
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });

    // Clear status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="section-label">Contact Us</span>
            <h1 className="page-title">Let&apos;s Start a Conversation</h1>
            <p className="page-description">
              Have a project in mind? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="form-title">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile App Development</option>
                    <option value="api-development">API Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="database-design">Database Design</option>
                    <option value="devops">DevOps</option>
                    <option value="consulting">Code Review & Consulting</option>
                    <option value="custom-solutions">Custom Software Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-large submit-btn"
                >
                  Send Message
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
                {submitStatus === 'success' && (
                  <div className="form-status success">
                    Your email client should have opened. If not, please email us directly at {contactInfo.email}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-status error">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <h3 className="info-title">Get in Touch</h3>
                <p className="info-description">
                  We&apos;re here to help and answer any questions you might have. We look
                  forward to hearing from you.
                </p>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div className="info-content">
                      <span className="info-label">Email</span>
                      <a href={`mailto:${contactInfo.email}`} className="info-value">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* <div className="info-item">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div className="info-content">
                      <span className="info-label">Phone</span>
                      <a href={`tel:${contactInfo.phone}`} className="info-value">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div> */}

                  {/* <div className="info-item">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="info-content">
                      <span className="info-label">Address</span>
                      <span className="info-value">
                        {contactInfo.address.street}<br />
                        {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                      </span>
                    </div>
                  </div> */}
                </div>

                <div className="business-hours">
                  <h4 className="hours-title">Business Hours</h4>
                  <ul className="hours-list">
                    <li>
                      <span>Monday - Friday</span>
                      <span>{contactInfo.businessHours.weekdays}</span>
                    </li>
                  </ul>
                </div>

                <div className="social-links">
                  <h4 className="social-title">Follow Us</h4>
                  <div className="social-icons">
                    <a
                      href={contactInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={contactInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={contactInfo.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="map-section">
        <div className="map-placeholder" role="img" aria-label="Map showing company location at the address in the contact information">
          <div className="map-content">
            <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* <rect width="800" height="300" fill="#e2e8f0"/>
              <rect x="0" y="0" width="800" height="300" fill="url(#mapGrid)" opacity="0.3"/>
              <circle cx="400" cy="150" r="30" fill="#2563eb" opacity="0.2"/>
              <circle cx="400" cy="150" r="20" fill="#2563eb" opacity="0.4"/>
              <circle cx="400" cy="150" r="10" fill="#2563eb"/>
              <path d="M400 145 L400 130" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <text x="400" y="200" textAnchor="middle" fill="#475569" fontSize="16" fontWeight="500">
                {contactInfo.address.street}
              </text>
              <text x="400" y="225" textAnchor="middle" fill="#64748b" fontSize="14">
                {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
              </text>
              <defs>
                <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
                </pattern>
              </defs> */}
            </svg>
            {/* <span className="placeholder-text">Replace with embedded Google Map</span> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
