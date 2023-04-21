import React from "react";
import arrow from '../images/arrow.png';
import Card from "../components/Card";




const ConditionalRendering = () => {
  return(
    <div className="info-container">
    <p>This is</p>
    <h1>Conditional Rendering</h1>
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

export default ConditionalRendering