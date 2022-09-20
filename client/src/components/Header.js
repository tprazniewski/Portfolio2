import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import "../stylesheets/header.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  const [showHeader, setShowHeader] = useState(false);

  const path = window.location.pathname

  return (
    <div className="header">
      {showHeader 
      ? ( <IoMdClose  onClick={()=>setShowHeader(!showHeader)} className="position-fixed top-0 end-0 menu-icon" />) 
      : ( <HiMenuAlt4 onClick={()=>setShowHeader(!showHeader)} className="position-fixed top-0 end-0 menu-icon" />
      )}

      <ul className={`${showHeader ? 'show-header' : 'hide-header'}`}>
          <li className={`${path=='/' && 'active'}`}><Link to='/'>Home</Link></li>
          <li className={`${path=='/projects' && 'active'}`}><Link to='/projects'>Projects</Link></li>
          <li className={`${path=='/contact' && 'active'}`}><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Header;
