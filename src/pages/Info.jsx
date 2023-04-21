import React from "react";
import arrow from '../images/arrow.png';
import Card from "../components/Card";




const Info = () => {
  return(
    <div className="info-container">
    <p>THIS IS</p>
    <h1>Info-page</h1>
    <button className="next-button">
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

export default Info