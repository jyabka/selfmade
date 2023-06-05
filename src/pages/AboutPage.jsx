import React from "react";
import '../styles/About.css'
import Header from "./Header";

function AboutPage() {
  return (
    <div className="about_page">
      <Header className="about_header"/>
      <div className="about_background"/>
      <div className="about_container"></div>
    </div>
  )
}

export default AboutPage;
