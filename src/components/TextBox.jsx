import React from "react";
import arrow from '../images/arrow.png';


const TextBox = () => {
  return(
    <div className="text-box">
    <p>WE HELP YOU TO</p>
    <h1>Design your React app</h1>
    <button>
    <img src={arrow} className="Icon"></img>
    </button>
  </div>
  )
}

export default TextBox