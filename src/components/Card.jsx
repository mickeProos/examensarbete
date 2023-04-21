import React from "react";
import { motion } from "framer-motion"
import { useState } from "react";



const Card = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return(
  <motion.div 
  transition={{layout: { duration: 1, type: "spring" }}} 
  layout 
  onClick={() => setIsOpen(!isOpen)} 
  className="card"
  style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0,0.5)'}}
  >
    <motion.h2 layout="position">framer motion 🚀</motion.h2>
    {isOpen && ( 
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="expand">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda molestiae quaerat accusamus vel mollitia qui sed porro. 
        <br/>
        <br/>
        Aspernatur, voluptate sed quasi totam aliquam sit tenetur nemo minima at debitis blanditiis!</p>
        <button>See Code Example </button>
    </motion.div>
   ) }
  </motion.div>
  )
}

export default Card