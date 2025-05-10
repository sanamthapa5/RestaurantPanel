// import React, { useState } from "react";
// import { Globe2, Mail, ShoppingCart, User, ChevronDown } from "lucide-react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo-section">
//           {/* <h1 className="logo">Pichart</h1> */}
//         </div>

//         <div className="right-section">
//           <div className="language-selector">
//             <button
//               className="language-button"
//               onClick={() => setIsLanguageOpen(!isLanguageOpen)}
//             >
//               <Globe2 size={20} />
//               <span>En</span>
//               <ChevronDown size={16} />
//             </button>

//             {isLanguageOpen && (
//               <div className="language-dropdown">
//                 <a href="#" className="language-option">
//                   En
//                 </a>
//                 <a href="#" className="language-option">
//                   Bn
//                 </a>
//                 <a href="#" className="language-option">
//                   Ar
//                 </a>
//                 <a href="#" className="language-option">
//                   Es
//                 </a>
//               </div>
//             )}
//           </div>

//           <button className="icon-button">
//             <Mail size={20} />
//           </button>

//           <button className="icon-button cart-button">
//             <ShoppingCart size={20} />
//             <span className="cart-badge">9+</span>
//           </button>

//           <div className="profile-section">
//             <div className="avatar">
//               <User size={20} className="text-gray-600" />
//             </div>
//             <p className="user-email">user@gmail.com</p>
//             <div className="online-indicator"></div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Globe2, Mail, ShoppingCart, User, ChevronDown } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-section"></div>

        <div className="navbar-right-section">
          <div className="navbar-language-selector">
            <button
              className="navbar-language-button"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <Globe2 size={20} />
              <span>En</span>
              <ChevronDown size={16} />
            </button>

            {isLanguageOpen && (
              <div className="navbar-language-dropdown">
                <a href="#" className="navbar-language-option">
                  En
                </a>
                <a href="#" className="navbar-language-option">
                  Bn
                </a>
                <a href="#" className="navbar-language-option">
                  Ar
                </a>
                <a href="#" className="navbar-language-option">
                  Es
                </a>
              </div>
            )}
          </div>

          <button className="navbar-icon-button">
            <Mail size={20} />
          </button>

          <button className="navbar-icon-button navbar-cart-button">
            <ShoppingCart size={20} />
            <span className="navbar-cart-badge">9+</span>
          </button>

          <div className="navbar-profile-section">
            <div className="navbar-avatar">
              <User size={20} className="text-gray-600" />
            </div>
            <p className="navbar-user-email">user@gmail.com</p>
            <div className="navbar-online-indicator"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
