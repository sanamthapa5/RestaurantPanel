// import React from "react";  
// import { Navbar as BootstrapNavbar, Nav, Dropdown } from "react-bootstrap";
// import { FaEnvelope, FaShoppingCart, FaGlobe } from "react-icons/fa";
// import { useTranslation } from "react-i18next";
// import "../i18n"; // Import the i18n configuration

// const CustomNavbar = () => {
//   const { t, i18n } = useTranslation();       /////  this code has translation activated 

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//   };

//   return (
//     <BootstrapNavbar bg="light" expand="lg" className="px-4 d-flex justify-content-end">
//       {/* Language Switcher */}
//       <Dropdown className="me-3">
//         <Dropdown.Toggle variant="light" id="language-dropdown">
//           <FaGlobe size={20} className="me-1" /> {i18n.language === "en" ? "En" : "ने"}
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item onClick={() => changeLanguage("en")}>English</Dropdown.Item>
//           <Dropdown.Item onClick={() => changeLanguage("np")}>नेपाली</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       {/* Messages & Cart */}
//       <Nav className="me-3">
//         <Nav.Link href="#messages">
//           <FaEnvelope size={20} className="me-2" />
//           <span className="badge bg-danger">9+</span>
//         </Nav.Link>
//         <Nav.Link href="#cart">
//           <FaShoppingCart size={20} />
//         </Nav.Link>
//       </Nav>

//       {/* User Profile */}
//       <Dropdown align="end">
//         <Dropdown.Toggle variant="light" id="user-dropdown">
//           <img
//             src="https://ui-avatars.com/api/?name=Jhon+Doe&background=random"
//             alt="User"
//             className="rounded-circle me-2"
//             width="30"
//             height="30"
//           />
//           Jhon Doe
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item>Profile</Dropdown.Item>
//           <Dropdown.Item>Logout</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </BootstrapNavbar>
//   );
// };

// export default CustomNavbar;


// import React from "react";
// import { Navbar as BootstrapNavbar, Nav, Dropdown } from "react-bootstrap";
// import { FaEnvelope, FaShoppingCart, FaGlobe } from "react-icons/fa";
// // import { useTranslation } from "react-i18next"; // Comment out the translation import
// // import "../i18n"; // Comment out the i18n import

// const CustomNavbar = () => {
//   // const { t, i18n } = useTranslation(); // Comment out the translation hooks

//   // const changeLanguage = (lang) => {
//   //   i18n.changeLanguage(lang); // Keep this empty for now, so no language change happens
//   // };

//   return (
//     <BootstrapNavbar bg="light" expand="lg" className="px-4 d-flex justify-content-end">
//       {/* Language Switcher */}
//       <Dropdown className="me-3">
//         <Dropdown.Toggle variant="light" id="language-dropdown">
//           <FaGlobe size={20} className="me-1" /> {/* Keep the globe icon */}
//           {/* Display language options, but without changing anything */}
//           {/* Since we're disabling the actual translation, this will show 'En' */}
//           En
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item disabled>English</Dropdown.Item> {/* Disable the options */}
//           <Dropdown.Item disabled>नेपाली</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       {/* Messages & Cart */}
//       <Nav className="me-3">
//         <Nav.Link href="#messages">
//           <FaEnvelope size={20} className="me-2" />
//           <span className="badge bg-danger">9+</span>
//         </Nav.Link>
//         <Nav.Link href="#cart">
//           <FaShoppingCart size={20} />
//         </Nav.Link>
//       </Nav>

//       {/* User Profile */}
//       <Dropdown align="end">
//         <Dropdown.Toggle variant="light" id="user-dropdown">
//           <img
//             src="https://ui-avatars.com/api/?name=Jhon+Doe&background=random"
//             alt="User"
//             className="rounded-circle me-2"
//             width="30"
//             height="30"
//           />
//           Jhon Doe
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item>Profile</Dropdown.Item>
//           <Dropdown.Item>Logout</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </BootstrapNavbar>
//   );
// };

// export default CustomNavbar;



import React, { useState } from 'react';
import { Globe2, Mail, ShoppingCart, User, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-section">
          {/* <h1 className="logo">Pichart</h1> */}
        </div>

        <div className="right-section">
          <div className="language-selector">
            <button 
              className="language-button"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <Globe2 size={20} />
              <span>En</span>
              <ChevronDown size={16} />
            </button>
            
            {isLanguageOpen && (
              <div className="language-dropdown">
                <a href="#" className="language-option">En</a>
                <a href="#" className="language-option">Bn</a>
                <a href="#" className="language-option">Ar</a>
                <a href="#" className="language-option">Es</a>
              </div>
            )}
          </div>
           

         

          <button className="icon-button">
            <Mail size={20} />
          </button>

          <button className="icon-button cart-button">
            <ShoppingCart size={20} />
            <span className="cart-badge">9+</span>
          </button>

          <div className="profile-section">
            <div className="avatar">
              <User size={20} className="text-gray-600" />
            </div>
            <p className="user-email">user@gmail.com</p>
            <div className="online-indicator"></div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;