import React from "react";
import {useRef} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom"

const Navbar = () => {

  const navRef = useRef(false)

  const toggleNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }

  return(
    <div className="top-nav">  
     
              <ul ref={navRef}>
                <li><Link onClick={toggleNavbar} to="/">HOME</Link></li>
                <li><Link onClick={toggleNavbar} to="/info">INFO</Link></li>
                <li><Link onClick={toggleNavbar} to="/props">PROPS</Link></li>
                <li><Link onClick={toggleNavbar} to="/hooks">HOOKS</Link></li>
                <li><Link onClick={toggleNavbar} to="/conditionalrendering">CONDITIONAL RENDERING</Link></li>
              <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
                <FaTimes/>
              </button>
              </ul>

              <button className="nav-btn" onClick={toggleNavbar}>
                <FaBars/>
              </button>
              <button onClick={() => window.open( 'https://react.dev/learn')}>React documentation</button>
    </div>
  )
}

export default Navbar