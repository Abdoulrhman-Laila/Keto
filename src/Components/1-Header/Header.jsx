import "./Header.css";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="header flex">
      <img src="logo.png" alt="" />
      <button className="minue" onClick={() => setShowModal(true)}>
        <FaAlignJustify style={{ color: 'var(--danger)' }} />
      </button>

      <ul className="nav flex ">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/ourroom">OUR ROOM</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
      </ul>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li className="close" onClick={() => setShowModal(false)}>
              <FaWindowClose />
            </li>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/ourroom">OUR ROOM</a></li>
            <li><a href="/gallery">GALLERY</a></li>
            <li><a href="/blog">BLOG</a></li>
            <li><a href="/contact">CONTACT US</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;