import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";


const SavedCards = () => {
  const [savedCards, setSavedCards] = useState([])

  const userID = useGetUserId()

  useEffect(() => {
    
//fetching saved cards data
    const fetchSavedCards = async () => {
      try {
       const response = await axios.get(`http://localhost:3001/cards/savedCards/${userID}`)
       setSavedCards(response.data.savedCards)
      console.log(response.data)
      } catch (err) {
        console.error(err);
      }
    }
  
    fetchSavedCards()
  }, [])

  

  return(
    <div className="info-container">
    <p>THIS IS</p>
    <h1>ALL SAVED CARDS</h1>
      <ul>
    <div className="card-container">
      {savedCards.map((card) => (
        <li key={card._id}>
         <div 
         className="card"
         style={{borderRadius: '1rem', boxShadow: '0px 5px 2px #bababa'
        }}
         >
          <h2>{card.title} 🚀</h2>
        <div className="text-container">
          <p>{card.text}</p>
          </div>
          <div className="img-container">
          <img src={card.imgUrl} alt={card.title}/>
        </div>
       </div>
   </li>
      ))}
  </div>
      </ul>
  </div>
  )
}

export default SavedCards