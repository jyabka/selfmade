import React from "react";
import '../styles/Header.css'
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="header_container">
      <div className='logo'/>
      <Link className='header_item' to='/'>Home</Link>
      <Link className='header_item' to='/about'>Skills</Link>
      <Link className='header_item' to='/gallery'>Gallery</Link>
      <Link className='header_item' to='/projects'>Projects</Link>
      {/*<button className='header_item theme_change'></button>*/}
    </div>
  )
}

export default Header;