import React, { useState } from "react";
import { Settings, MessageCircle, ShoppingCart, User } from "lucide-react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>Header-Check</h1>
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
