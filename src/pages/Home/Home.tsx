// src/pages/Home/Home.tsx
import { Link } from 'react-router-dom';
import { FaArrowRight, FaAward, FaLeaf, FaUsers, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1920&h=1080&fit=crop" 
            alt="Premium meat cuts"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">🥩 Family Owned Since 1989</div>
              <h1 className="hero-title">
                Premium Quality Meats
                <span className="hero-subtitle">Delivered Fresh Daily</span>
              </h1>
              <p className="hero-description">
                Family-owned butcher shop and wholesaler delivering the finest cuts 
                to Strathfield South and beyond. Experience the difference quality makes.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  View Our Cuts <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
              <div className="hero-features">
                <div className="hero-feature">
                  <FaClock />
                  <span>Fresh Daily</span>
                </div>
                <div className="hero-feature">
                  <FaMapMarkerAlt />
                  <span>Strathfield South</span>
                </div>
                <div className="hero-feature">
                  <FaPhone />
                  <span>(02) 9742 5087</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Promise</span>
            <h2 className="section-title">Why Choose Keegan Meats?</h2>
            <p className="section-description">Three decades of excellence in every cut</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrapper">
                <FaAward className="value-icon" />
              </div>
              <h3>Premium Quality</h3>
              <p>We source only the finest cuts, ensuring exceptional taste and texture in every piece.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <FaLeaf className="value-icon" />
              </div>
              <h3>Local Sourcing</h3>
              <p>Supporting Australian farmers and producers with ethically sourced, fresh meats.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <FaUsers className="value-icon" />
              </div>
              <h3>Family Heritage</h3>
              <p>Three decades of butchering expertise passed down through generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Selection</span>
            <h2 className="section-title">Our Specialties</h2>
            <p className="section-description">Expertly cut, perfectly prepared</p>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&h=600&fit=crop" 
                  alt="Premium beef cuts - ribeye and steaks"
                  className="category-image"
                />
                <div className="category-overlay">
                  <Link to="/products#beef" className="category-overlay-btn">
                    View Collection <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="category-content">
                <h3>Beef Cuts</h3>
                <p>Premium grass-fed and grain-fed beef, expertly cut to perfection.</p>
                <Link to="/products#beef" className="category-link">
                  Explore Beef <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=800&h=600&fit=crop" 
                  alt="Fresh lamb chops and cuts"
                  className="category-image"
                />
                <div className="category-overlay">
                  <Link to="/products#lamb" className="category-overlay-btn">
                    View Collection <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="category-content">
                <h3>Lamb & Goat</h3>
                <p>Tender Australian lamb and goat, perfect for any occasion.</p>
                <Link to="/products#lamb" className="category-link">
                  Explore Lamb <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=800&h=600&fit=crop" 
                  alt="Quality pork products and sausages"
                  className="category-image"
                />
                <div className="category-overlay">
                  <Link to="/products#pork" className="category-overlay-btn">
                    View Collection <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="category-content">
                <h3>Pork Products</h3>
                <p>Quality pork cuts, sausages, and specialty smallgoods.</p>
                <Link to="/products#pork" className="category-link">
                  Explore Pork <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-background">
          <img 
            src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1920&h=600&fit=crop" 
            alt="Butcher shop interior"
            className="cta-bg-image"
          />
        </div>
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Difference?</h2>
            <p>Visit our store in Strathfield South or contact us for wholesale inquiries.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get In Touch
              </Link>
              <a href="tel:0297425087" className="btn btn-secondary btn-large">
                <FaPhone /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;