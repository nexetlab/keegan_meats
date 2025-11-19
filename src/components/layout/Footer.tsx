// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { FaHeart, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection">
          <Link to="/" className="footerLogo">
            <FaHeart className="logoIcon" />
            <span>Keegan Meats</span>
          </Link>
          <p className="footerDescription">
            Premium meat wholesaler and retail shop serving Strathfield South 
            and surrounding areas since 1989.
          </p>
        </div>

        <div className="footerSection">
          <h3 className="footerHeading">Contact Info</h3>
          <div className="contactItem">
            <FaMapMarkerAlt className="contactIcon" />
            <span>1 Madeline St, Strathfield South, NSW, Australia</span>
          </div>
          <div className="contactItem">
            <FaPhone className="contactIcon" />
            <span>(02) 9742 5087</span>
          </div>
        </div>

        <div className="footerSection">
          <h3 className="footerHeading">Quick Links</h3>
          <nav className="footerNav">
            <Link to="/" className="footerLink">Home</Link>
            <Link to="/about" className="footerLink">About</Link>
            <Link to="/products" className="footerLink">Our Cuts</Link>
            <Link to="/contact" className="footerLink">Contact</Link>
          </nav>
        </div>
      </div>
      
      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} Keegan Meats Pty Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;