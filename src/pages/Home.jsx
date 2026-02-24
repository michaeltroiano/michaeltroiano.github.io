import { Link } from 'react-router-dom';
import { contactInfo, services } from '../data/contactInfo';
import ServiceCard from '../components/ServiceCard';
import heroImg from '../assets/hero.png';
import teamImg from '../assets/team.png';
import './Home.css';

const Home = () => {
  // Get first 6 services for preview
  const featuredServices = services.slice(0, 6);

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">Welcome to {contactInfo.companyName}</span>
            <h1 className="hero-title">
              Building <span className="gradient-text">Digital Excellence</span> for Tomorrow
            </h1>
            <p className="hero-description">
              We transform your ideas into powerful software solutions. From web applications
              to cloud infrastructure, we deliver excellence in every line of code.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-large">
                Start Your Project
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <Link to="/services" className="btn btn-secondary btn-large">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="Hero image showing modern software development workspace with code on screens" className="hero-img" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={teamImg} alt="Team collaboration image showing software developers working together" className="about-img" />
            </div>
            <div className="about-content">
              <span className="section-label">About Us</span>
              <h2 className="section-title">Crafting Software with Passion and Precision</h2>
              <p className="about-text">
                At {contactInfo.companyName}, we believe great software is built at the intersection
                of creativity and technical excellence. Founded in {contactInfo.foundedYear}, we have
                been helping businesses transform their digital presence with custom solutions that
                drive growth and efficiency.
              </p>
              <p className="about-text">
                Our team of experienced developers, designers, and architects work collaboratively
                to deliver solutions that not only meet your current needs but are scalable for
                future growth.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{new Date().getFullYear() - contactInfo.foundedYear}+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Solutions That Drive Results</h2>
            <p className="section-subtitle">
              From concept to deployment, we offer comprehensive software development
              services tailored to your business needs.
            </p>
          </div>
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-secondary btn-large">
              View All Services
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Next Project?</h2>
            <p className="cta-description">
              Let&apos;s discuss how we can help bring your vision to life. Our team is ready
              to tackle your most challenging software needs.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get in Touch
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
