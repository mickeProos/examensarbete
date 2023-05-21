import React from "react";
import {useRef} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import {Link, useNavigate} from "react-router-dom"
import {useCookies} from 'react-cookie'

const Navbar = () => {

  const [cookies, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()
  const navRef = useRef(false)

  const logout = () => {
    setCookies("access_token", "")
    window.localStorage.removeItem("userID")
    navigate("/auth")
  }

  const toggleNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }

  return(
    <div className="top-nav">  
     
              <ul ref={navRef}>
                <li><Link onClick={toggleNavbar} to="/">HOME</Link></li>
                {/*If there are no cookies.access_token, you are not logged in and a empty <li> tag will display */}
                {!cookies.access_token ? ( <li></li>
              ) :(
                <>
                <li><Link onClick={toggleNavbar} to="/info">INFO</Link></li>
                <li><Link onClick={toggleNavbar} to="/saved-cards">SAVED CARDS</Link></li>
                <li><Link onClick={toggleNavbar} to="/create-card">CREATE CARD</Link></li>
                </>
              )}
              <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
                <FaTimes/>
              </button>
              </ul>

              <button className="nav-btn" onClick={toggleNavbar}>
                <FaBars/>
              </button>
              {/* If you are logged in change button to log out */ }
              {!cookies.access_token ? (<Link to="/auth"><button>Login / Register </button></Link>
              ) :(
                <button onClick={logout}>Logout</button>
              )}
             
    </div>
  )
}

export default Navbar