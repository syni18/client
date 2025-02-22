import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-top-logo">
              <a href="#" className="brand-logo">
                ClearEyeLens
              </a>
            </div>
            <div className="footer-top-newsletter">
              <input
                type="email"
                name="email"
                className="newsletter-field"
                placeholder="johndoe@yourdomain.com"
              />
              <button type="button">Subscribe</button>
            </div>
          </div>
          <div className="footer-top-right">
            <div className="right-lists">
              <ul>
                <label htmlFor="#">Help</label>
                <li>Payments</li>
                <li>Cancellation & Returns</li>
                <li>Shipping</li>
                <li>FAQ</li>
              </ul>
              <ul>
                <label htmlFor="">Consumer Policy</label>
                <li>Cancellation & Returns</li>
                <li>Terms of use</li>
                <li>Security</li>
                <li>Privacy</li>
              </ul>
              <ul>
                <label htmlFor="">About</label>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="right-mailus">
              <label htmlFor="">MailUs</label>
              <p className="_1oQ-r6">Flipkart Internet Private Limited, </p>
              <p className="_1oQ-r6"> Buildings Alyssa, Begonia & </p>
              <p className="_1oQ-r6"> Clove Embassy Tech Village, </p>
              <p className="_1oQ-r6">
                {" "}
                Outer Ring Road, Devarabeesanahalli Village,{" "}
              </p>
              <p className="_1oQ-r6"> Bengaluru, 560103, </p>
              <p className="_1oQ-r6"> Karnataka, India</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-rights">
            &copy;2023-2024 Cleareyelens.com
          </div>
          <ul className="footer-bottom-links">
            <li className="botton-link-legal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#858585"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-from-dot"
              >
                <path d="m5 9 7-7 7 7" />
                <path d="M12 16V2" />
                <circle cx="12" cy="21" r="1" />
              </svg>
              Back to top
            </li>
            <li className="botton-link-legal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#858585"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-help-circle"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              Help Center
            </li>
            <li className="botton-link-legal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#858585"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-anchor"
              >
                <circle cx="12" cy="5" r="3" />
                <line x1="12" x2="12" y1="22" y2="8" />
                <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
              </svg>
              Sitemap
            </li>
          </ul>
          <ul className="footer-bottom-social">
            <li className="bottom-link-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </li>
            <li className="bottom-link-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </li>
            <li className="bottom-link-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </li>
            <li className="bottom-link-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
