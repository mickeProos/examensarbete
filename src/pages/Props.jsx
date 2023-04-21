import React from "react";
import arrow from '../images/arrow.png';
import Card from "../components/Card";




const PropsSection = () => {
  return(
    <div className="info-container">
    <p>THIS IS</p>
    <h1>THE PROPS SECTION</h1>
    <button>
    <img src={arrow} className="Icon"></img>
    </button>
    <div className="card-container">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  </div>
  )
}

export default PropsSection