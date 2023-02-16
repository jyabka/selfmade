import React from "react";
import '../styles/NotFoundPage.css'
import {Link} from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <Link className='goback_button' to='/'> ! GO BACK ! </Link>
      <div className="notfound_page">
        <div className="not_found">ACCESS DENIED</div>
      </div>
      <div className="notfound_background"/>
    </>
  )
}

export default NotFoundPage;
