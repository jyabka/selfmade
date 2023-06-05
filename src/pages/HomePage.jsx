import React from "react";
import '../styles/Home.css'
import Header from "./Header";

function HomePage() {
  return (
    <>
      <div className="home_page">
        <Header className="home_header"/>
        <div className="home_background"/>
        <div className='home_container'>
          <div className='home_item home-item-1'>Hey. This is a portfolio site.</div>
          <div className='home_item home-item-2'>I'm Nikita WEB Developer</div>
          <div className='home_item home-item-3'>I'll give you access to the site, click on something, look around.</div>
        </div>

      </div>
    </>
  )
}

export default HomePage;