import React from "react";
import logo from '../images/logo.png';

const Sidebar = () => {
  return(
      <div className="side-nav">
          <img src={logo} className="logo"></img> 
          <a href="/info">GET STARTED</a>
       </div>
  )
}

export default Sidebar