// import React from "react";
// import { Globe, MessageCircle, ShoppingCart, User } from "lucide-react";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-right">
//         {/* Language Dropdown */}
//         <div className="language-dropdown">
//           <Globe size={24} />
//           <select>
//             <option>EN</option>
//             <option>BN</option>
//             <option>AR</option>
//             <option>ES</option>
//           </select>
//         </div>

//         {/* Message & Cart Icons */}
//         <MessageCircle size={24} className="icon" />
//         <ShoppingCart size={24} className="icon" />

//         {/* Profile Section */}
//         <div className="profile-section">
//           <div className="profile-info">
//             <p>Pichart</p>
//             <small>t**********@gmail.com</small>
//           </div>
//           <User size={24} className="profile-icon" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header; 


// src/Header.jsx
// import React from 'react';
// import { Globe, MessageCircle, ShoppingCart, User } from "lucide-react";

// import './Header.css';



// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-right">
//         {/* Language Dropdown */}
      //   <div className="language-dropdown">
      //     <Globe size={24} />
      //     <select>
      //       <option>EN</option>
      //       <option>BN</option>
      //       <option>AR</option>
      //       <option>ES</option>
      //     </select>
      //   </div>

      //   {/* Message & Cart Icons */}
      //   <MessageCircle size={24} className="icon" />
      //   <ShoppingCart size={24} className="icon" />

      //   {/* Profile Section */}
      //   <div className="profile-section">
      //     <div className="profile-info">
      //       <p>Pichart</p>
      //       <small>t**********@gmail.com</small>
      //     </div>
      //     <User size={24} className="profile-icon" />
      //   </div>
      // </div>
//     </header>
//   );
// };

// export default Header;

import React, {useState} from 'react';
import { Settings, MessageCircle, ShoppingCart, User } from 'lucide-react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>Header</h1>
        </div>
        <div className="header-actions">
          <button className="icon-button" aria-label="Settings">
            <Settings size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;


// import React, { useState } from 'react';
// import { Settings, MessageCircle, ShoppingCart, User } from 'lucide-react';
// import './Header.css';

// function Header() {
//   const [language, setLanguage] = useState('EN');
//   const handleLanguageChange = (lang) => setLanguage(lang);

//   return (
//     <header className="header">
//       <div className="header-content">
//         {/* Language Dropdown */}
//         <div className="language-dropdown">
//           <button className="dropdown-button" aria-label="Select Language">
//             {language} <span className="dropdown-arrow">▼</span>
//           </button>
//           <div className="dropdown-menu">
            
//             <button onClick={() => handleLanguageChange('EN')}>EN</button>
//             <button onClick={() => handleLanguageChange('BN')}>BN</button>
//             <button onClick={() => handleLanguageChange('AS')}>AS</button>
//             <button onClick={() => handleLanguageChange('ES')}>ES</button>
            
//           </div>
//         </div>

        

//         {/* Icons & User Profile */}
//         <div className="header-actions">
//           {/* Message Icon */}
//           <button className="icon-button" aria-label="Messages">
//             <MessageCircle size={24} />
//           </button>

//           {/* Cart Icon */}
//           <button className="icon-button" aria-label="Cart">
//             <ShoppingCart size={24} />
//           </button>

//           {/* User Profile */}
//           <div className="user-profile">
//             <span className="user-name">Pichart</span>
//             <span className="user-email">**********@gmail.com</span>
//             <button className="icon-button profile-button" aria-label="Profile">
//               <User size={24} />
//             </button>
//           </div>

//           {/* Settings Icon */}
//           <button className="icon-button" aria-label="Settings">
//             <Settings size={24} />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

