// src/pages/About/About.tsx
import { FaAward, FaHeart, FaUsers, FaLeaf } from 'react-icons/fa';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: "Michael Keegan",
      role: "Founder & Head Butcher",
      bio: "With over 35 years of experience, Michael started Keegan Meats in 1989 with a vision to bring quality meats to the Strathfield South community.",
      image: "/team/michael-keegan.jpg"
    },
    {
      name: "Sarah Keegan",
      role: "Shop Manager",
      bio: "Sarah manages daily operations and customer relations, ensuring every visitor receives the warm, personal service we're known for.",
      image: "/team/sarah-keegan.jpg"
    },
    {
      name: "James Wilson",
      role: "Senior Butcher",
      bio: "James brings 15 years of expert butchery skills, specializing in custom cuts and traditional preparation methods.",
      image: "/team/james-wilson.jpg"
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">Our Story</h1>
          <p className="about-subtitle">
            Serving the Strathfield South community with premium meats since 1989
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="about-history">
        <div className="container">
          <div className="history-content">
            <div className="history-text">
              <h2>Three Decades of Quality</h2>
              <p>
                Founded in 1989 by Michael Keegan, our family-owned butcher shop began 
                with a simple mission: to provide the local community with the highest 
                quality meats, sourced responsibly and prepared with expert care.
              </p>
              <p>
                What started as a small retail shop has grown into a respected wholesale 
                and retail operation, while maintaining the personal touch and commitment 
                to quality that defined us from the beginning.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">35+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1000s</span>
                  <span className="stat-label">Satisfied Customers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Local Farms</span>
                </div>
              </div>
            </div>
            <div className="history-image">
              <div className="image-placeholder">
                Historical shop image or founder portrait
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <FaAward className="value-icon" />
              <h3>Quality First</h3>
              <p>We never compromise on quality. Every cut is inspected and prepared to our exacting standards.</p>
            </div>
            <div className="value-item">
              <FaHeart className="value-icon" />
              <h3>Passion for Craft</h3>
              <p>Butchery is our craft, not just our business. We take pride in every cut we make.</p>
            </div>
            <div className="value-item">
              <FaUsers className="value-icon" />
              <h3>Community Focus</h3>
              <p>We're proud to be part of the Strathfield South community and support local events and initiatives.</p>
            </div>
            <div className="value-item">
              <FaLeaf className="value-icon" />
              <h3>Sustainable Sourcing</h3>
              <p>We work with local farmers who practice ethical and sustainable farming methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="team-description">
            Our experienced team brings together decades of butchery expertise 
            with a genuine passion for serving our customers.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <div className="image-placeholder">
                    {member.name}
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Info */}
      <section className="about-shop">
        <div className="container">
          <div className="shop-content">
            <div className="shop-text">
              <h2>Visit Our Shop</h2>
              <p>
                Experience the Keegan Meats difference firsthand. Visit our Strathfield South 
                location where our friendly staff will help you select the perfect cuts for 
                any occasion.
              </p>
              <div className="shop-details">
                <div className="detail-item">
                  <strong>Address:</strong>
                  <span>1 Madeline St, Strathfield South, NSW, Australia</span>
                </div>
                <div className="detail-item">
                  <strong>Phone:</strong>
                  <span>(02) 9742 5087</span>
                </div>
                <div className="detail-item">
                  <strong>Years Serving:</strong>
                  <span>Since 1989</span>
                </div>
              </div>
            </div>
            <div className="shop-image">
              <div className="image-placeholder">
                Shop front or interior image
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;