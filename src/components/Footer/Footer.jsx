import React from "react";
import "./Footer.css"; // Importing the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Logo</h3>
        </div>

        <div className="footer-sections">
          <div className="section">
            <h4>Mobile app</h4>
            <ul>
              <li>Features</li>
              <li>Live share</li>
              <li>Video record</li>
            </ul>
          </div>

          <div className="section">
            <h4>Community</h4>
            <ul>
              <li>Featured artists</li>
              <li>The Portal</li>
              <li>Live events</li>
            </ul>
          </div>

          <div className="section">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>History</li>
            </ul>
          </div>

          <div className="footer-buttons">
            <button className="register-btn">Register</button>
            <button className="login-btn">Log in</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Photo, Inc. 2019. We love our users!</p>
        <div className="social-icons">
          <span className="icon">f</span>
          <span className="icon">t</span>
          <span className="icon">in</span>
          <span className="icon">ig</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
