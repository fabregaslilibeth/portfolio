'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
    {/* Footer */}
    <footer className="footer">
    <div className="footer-content">
      <h2 className="footer-title">
        <span className="title-italic">Blending </span>
        <span className="title-view-inter _2">code</span>
        <br />
        <span className="title-italic">& </span>
        <span className="title-view-inter _4">commerce</span>
        <br />
        <span className="title-italic _2">to </span>
        <span className="title-view-inter _5">craft solutions</span>
        <br />
        <span className="title-italic _6">since </span>
        <span className="title-view-inter _6">2019</span>
      </h2>
    </div>
    <div className="footer-nav">
      <a href="https://instagram.com/veronique.nebloger" target="_blank" className="footer-link">Instagram</a>
      <span className="footer-credit">design: Lilibeth Fabregas</span>
      <a href="https://www.behance.net/veronicazubakova" target="_blank" className="footer-link">Behance</a>
      <a href="https://t.me/lucius_wd" target="_blank" className="footer-link">development: kirill andreev</a>
      <a href="https://www.linkedin.com/in/veroni%D1%81azubakova" target="_blank" className="footer-link">LinkedIn</a>
      <a href="mailto:veronica.zubakova@gmail.com" className="footer-link">Email</a>
    </div>
  </footer>

  {/* Contact */}
  <div className="fixed-contact-badge">
    <a href="/contact" className="contact-link">
      <div className="contact-bg">
        <div className="contact-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="contact-spacer"></div>
        <span className="contact-text">Contact</span>
      </div>
    </a>
  </div>
  </>
  );
}
