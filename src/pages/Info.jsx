import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"





const Info = () => {
  const [cards, setCards] = useState([])
  const [isOpen, setIsOpen] = useState(false)
   
  useEffect(() => {
    const fetchCards = async () => {
      try {
       const response = await axios.get("http://localhost:3001/cards")
       setCards(response.data)
       
      } catch (err) {
        console.error(err);
      }
    }
    fetchCards()
  }, [])



  return(
    <div className="info-container">
    <p>THIS IS</p>
    <h1>ALL CURRENT CARDS</h1>
    <div className="card-container">
      {cards.map((card) => (
         <motion.div 
         transition={{layout: { duration: 1, type: "spring" }}} 
         layout 
         onClick={() => setIsOpen(!isOpen)} 
         className="card"
         style={{borderRadius: '1rem', boxShadow: '0px 5px 2px #bababa'}}
         >
          <motion.h2 layout="position">{card.title} 🚀</motion.h2>

          {isOpen && ( 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="expand">
          <p>{card.text}</p>
          <div className="img-container">
          <img src={card.imgUrl} alt={card.title}/>
          </div>
        </motion.div>
   ) }
       </motion.div >
      ))}

    
  </div>
  </div>
  )
}

export default Info