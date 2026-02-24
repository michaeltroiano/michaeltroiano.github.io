import { Link } from 'react-router-dom';
import { services, contactInfo } from '../data/contactInfo';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = () => {
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <span className="section-label">Our Services</span>
            <h1 className="page-title">Comprehensive Software Solutions</h1>
            <p className="page-description">
              From ideation to deployment, we provide end-to-end software development
              services tailored to your unique business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section services-main">
        <div className="container">
          <div className="services-grid-full">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              Our proven methodology ensures successful project delivery every time.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3 className="step-title">Discovery</h3>
              <p className="step-description">
                We begin by understanding your business goals, challenges, and requirements
                through in-depth consultations and analysis.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3 className="step-title">Planning</h3>
              <p className="step-description">
                Our team creates a detailed project roadmap, including timelines,
                milestones, and resource allocation.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3 className="step-title">Development</h3>
              <p className="step-description">
                Using agile methodologies, we build your solution iteratively with
                regular check-ins and demonstrations.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3 className="step-title">Delivery</h3>
              <p className="step-description">
                After thorough testing and quality assurance, we deploy your solution
                and provide ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section tech-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Technologies</span>
            <h2 className="section-title">Tools We Use</h2>
            <p className="section-subtitle">
              We leverage cutting-edge technologies to build robust and scalable solutions.
            </p>
          </div>
          <div className="tech-categories">
            <div className="tech-category">
              <h3 className="tech-category-title">Frontend</h3>
              <ul className="tech-list">
                <li>React / Next.js</li>
                <li>Vue.js / Nuxt.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Angular</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Backend</h3>
              <ul className="tech-list">
                <li>.NET Core</li>
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>Java / Spring Boot</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Database</h3>
              <ul className="tech-list">
                <li>MySQL</li>
                <li>SQL Server</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>Elasticsearch</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Cloud & DevOps</h3>
              <ul className="tech-list">
                <li>Azure</li>
                <li>AWS</li>
                <li>Google Cloud</li>
                <li>Docker / Kubernetes</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Need a Custom Solution?</h2>
            <p className="cta-description">
              Let&apos;s discuss your project requirements and find the perfect solution for your business.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get a Free Consultation
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <a href={`mailto:${contactInfo.email}`} className="btn btn-secondary btn-large cta-btn-light">
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
