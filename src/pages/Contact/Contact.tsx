// src/pages/Contact/Contact.tsx
import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaClock, 
  FaEnvelope,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: 'general' | 'wholesale' | 'custom';
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const businessHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '7:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 1:00 PM' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact">
        <section className="contact-hero">
          <div className="container">
            <h1 className="contact-title">Thank You!</h1>
            <p className="contact-subtitle">
              Your message has been received. We'll get back to you soon.
            </p>
          </div>
        </section>
        
        <section className="contact-success">
          <div className="container">
            <div className="success-content">
              <FaCheckCircle className="success-icon" />
              <h2>Message Sent Successfully</h2>
              <p>
                Thank you for contacting Keegan Meats. We appreciate your inquiry 
                and will respond within 24 hours during business days.
              </p>
              <div className="success-actions">
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="primary-button"
                >
                  Send Another Message
                </button>
                <a href="/" className="secondary-button">
                  Return Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Visit our store, give us a call, or send us a message
          </p>
        </div>
      </section>

      <div className="container">
        <div className="contact-layout">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Visit Our Store</h2>
            
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div className="info-content">
                <h3>Address</h3>
                <p>1 Madeline St, Strathfield South, NSW, Australia</p>
                <a 
                  href="https://maps.google.com/?q=1+Madeline+St,+Strathfield+South+NSW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaPhone className="info-icon" />
              <div className="info-content">
                <h3>Phone</h3>
                <a href="tel:0297425087" className="phone-link">
                  (02) 9742 5087
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaClock className="info-icon" />
              <div className="info-content">
                <h3>Business Hours</h3>
                {businessHours.map((schedule, index) => (
                  <div key={index} className="hours-item">
                    <span className="hours-day">{schedule.day}</span>
                    <span className="hours-time">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Embed */}
            <div className="map-container">
              <h3>Find Us</h3>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.783315036204!2d151.0862593152106!3d-33.86788098065605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb2c1c851d1f%3A0x1c3c3c3c3c3c3c3c!2s1%20Madeline%20St%2C%20Strathfield%20South%20NSW%202136!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Keegan Meats Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <span className="error-message">
                      <FaExclamationCircle /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <span className="error-message">
                      <FaExclamationCircle /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryType" className="form-label">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="custom">Custom Order</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="Message subject"
                />
                {errors.subject && (
                  <span className="error-message">
                    <FaExclamationCircle /> {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us about your inquiry..."
                />
                {errors.message && (
                  <span className="error-message">
                    <FaExclamationCircle /> {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="button-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaEnvelope />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;