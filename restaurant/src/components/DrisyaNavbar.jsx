import React from "react";
import { Navbar as BootstrapNavbar, Nav, Dropdown } from "react-bootstrap";
import { FaEnvelope, FaShoppingCart, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../i18n"; // Import the i18n configuration

const CustomNavbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" className="px-4 d-flex justify-content-end">
      {/* Language Switcher */}
      <Dropdown className="me-3">
        <Dropdown.Toggle variant="light" id="language-dropdown">
          <FaGlobe size={20} className="me-1" /> {i18n.language === "en" ? "En" : "ने"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => changeLanguage("en")}>English</Dropdown.Item>
          <Dropdown.Item onClick={() => changeLanguage("np")}>नेपाली</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Messages & Cart */}
      <Nav className="me-3">
        <Nav.Link href="#messages">
          <FaEnvelope size={20} className="me-2" />
          <span className="badge bg-danger">9+</span>
        </Nav.Link>
        <Nav.Link href="#cart">
          <FaShoppingCart size={20} />
        </Nav.Link>
      </Nav>

      {/* User Profile */}
      <Dropdown align="end">
        <Dropdown.Toggle variant="light" id="user-dropdown">
          <img
            src="https://ui-avatars.com/api/?name=Jhon+Doe&background=random"
            alt="User"
            className="rounded-circle me-2"
            width="30"
            height="30"
          />
          Jhon Doe
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
