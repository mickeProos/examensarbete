import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";


const Info = () => {
  const [cards, setCards] = useState([])
  const [savedCards, setSavedCards] = useState([])
  const userID = useGetUserId()

  useEffect(() => {
    //fetching card data from mongoDB
    const fetchCards = async () => {
      try {
       const response = await axios.get("http://localhost:3001/cards")
       setCards(response.data)
       console.log(response.data) 
      } catch (err) {
        console.error(err);
      }
    }
//fetching saved cards data
    const fetchSavedCards = async () => {
      try {
       const response = await axios.get(`http://localhost:3001/cards/savedCards/ids/${userID}`)
       setSavedCards(response.data.savedCards)
      console.log(response.data)
      } catch (err) {
        console.error(err);
      }
    }
    fetchCards()
    fetchSavedCards()
  }, [])


  const saveCard = async(cardID) => {
    try {
      const response = await axios.put("http://localhost:3001/cards", {cardID, userID })
      setCards(response.data.savedCards)
     } catch (err) {
       console.error(err);
     }
   }

   const isCardSaved = (id) => savedCards.includes(id)
  

  return(
    <div className="info-container">
    <p>THIS IS</p>
    <h1>ALL CURRENT CARDS</h1>
      <ul>
    <div className="card-container">
      {cards.map((card) => (
        <li key={card._id}>
         <div 
         className="card"
         style={{borderRadius: '1rem', boxShadow: '0px 5px 2px #bababa'
        }}
         >
        
          <h2>{card.title} 🚀</h2>
          <button onClick={()=> saveCard(card._id)} disabled={isCardSaved(card._id)}>
            {isCardSaved(card._id) ? "Saved" : "save"}
            </button>

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

export default Info