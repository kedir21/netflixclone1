import React from 'react';
import  './Footer.css'
const link = "/"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="contact-us">
          <h2>
            <a href={link}>contact</a>
          </h2>
        </div>
        <div className="footer__links">
          <ul>
            <li>
              <a href={link}>FAQ</a>
            </li>
            <li>
              <a href={link}>Investor Relations</a>
            </li>
            <li>
              <a href={link}>Privacy</a>
            </li>
            <li>
              <a href={link}>speed test</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href={link}>Help Center</a>
            </li>
            <li>
              <a href={link}>Jobs</a>
            </li>
            <li>
              <a href={link}>Cookie Preferences</a>
            </li>
            <li>
              <a href={link}>Legal Notices</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href={link}>Account</a>
            </li>
            <li>
              <a href={link}>Ways to Watch</a>
            </li>
            <li>
              <a href={link}>Corporate Information</a>
            </li>
            <li>
              <a href={link}>Only on Netflix</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href={link}>Media Center</a>
            </li>
            <li>
              <a href={link}>Terms of Use</a>
            </li>
            <li>
              <a href={link}>contact us</a>
            </li>
          </ul>
        </div>
        <div className="netflx-location">
          <h2>Netflix Ethiopia</h2>
        </div>
        <h1>
          Built By: <a href="https://www.kedirn.com/">Kedir Nasir</a>
        </h1>
      </div>
    </div>
  );
}

export default Footer;