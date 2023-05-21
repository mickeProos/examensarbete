import React from "react";
import arrow from '../images/arrow.png';
import { Link } from "react-router-dom";


const Home = () => {
  
  return(
    <div className="home">
    <div className="text-box">
    <p>WE HELP YOU TO</p>
    <h1>Design your React app</h1>
    <Link to="/auth">
    <button className="arrow-button">
    <img src={arrow}className="Icon"></img>
    </button>
    </Link>
  </div>
  </div>
  )
}

export default Home