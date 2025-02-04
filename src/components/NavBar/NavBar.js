import React, { useState } from "react";
import "./NavBar.scss";
import logo from "../../img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span>The Balance Within</span>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#angebot" onClick={handleLinkClick}>
              Angebot
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              Über mich
            </a>
          </li>
          <li>
            <a href="#termin" onClick={handleLinkClick}>
              Termin und Preis
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={handleLinkClick}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
