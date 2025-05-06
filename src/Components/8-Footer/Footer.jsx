import "./Footer.css";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container flex">
        <section className="contact-section">
          <h1>Contact Us</h1>
          <ul>
            <li className="contact-item">
              <CiLocationOn className="icon" />
              <span>Address</span>
            </li>
            <li className="contact-item">
              <CiPhone className="icon" />
              <span>+01 1234569540</span>
            </li>
            <li className="contact-item">
              <AiOutlineMail className="icon" />
              <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </li>
          </ul>
        </section>

        <section className="menu-section">
          <h1>Menu Links</h1>
 

          <ul className=" ">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/ourroom">OUR ROOM</Link></li>
            <li><Link to="/gallery">GALLERY</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>
        </section>

        <section className="newsletter-section">
          <h1>News letter</h1>
          <div>
            <input placeholder="Enter your email" type="email" name="email" />
          </div>
          <button className="btn">Subscribe</button>
        </section>
      </div>
      <div className="footer2">
        <p> 2024 All Rights Reserved. Design by: <a href="mailto:abdoulrhmanlila@gmail.com">abdoulrhmanlila@gmail.com</a></p>
        <p>Distributed by ThemeWagon</p>
      </div>
    </div>
  );
}

export default Footer;