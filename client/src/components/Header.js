import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import "../stylesheets/header.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="header">
      {showHeader 
      ? ( <IoMdClose  onClick={()=>setShowHeader(!showHeader)} className="position-fixed top-0 end-0 menu-icon" />) 
      : ( <HiMenuAlt4 onClick={()=>setShowHeader(!showHeader)} className="position-fixed top-0 end-0 menu-icon" />
      )}

      <ul className={`${showHeader ? 'show-header' : 'hide-header'}`}>
        <li> <a href='http://localhost:3000/'>Home</a> </li>
        <li> <a href='http://localhost:3000/projects'>Projects</a> </li>
        <li> <a href='http://localhost:3000/contact'>Contact</a> </li>

      </ul>
    </div>
  );
}

export default Header;
