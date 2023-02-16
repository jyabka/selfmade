import './App.css';
import React from "react";
import Header from "./pages/Header";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import {Route, Routes} from "react-router";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App;
