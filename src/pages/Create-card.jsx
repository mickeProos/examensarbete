import React, { useState } from "react"
import axios from 'axios'
import { useGetUserId } from "../hooks/useGetUserId"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"

const CreateCard = () => {
  const userID = useGetUserId()
  const navigate = useNavigate()
  const [Cookies,_] = useCookies(["access_token"])

  const [card, setCard] = useState({
    title:"",
    text: "",
    imgUrl: "",
    userOwner: userID
  })

  

  const handleChange = (event) => {
    const {name,value} = event.target;
    setCard({...card, [name]: value})
  }

  const onSubmit = async(event) => {
      event.preventDefault();
      try {
        await axios.post("http://localhost:3001/cards", card, {  
          headers: { authorization: Cookies.access_token},
      })
        alert("Card created")
        navigate("/info")
      } catch (err) {
        console.error(err);
      }
  }

  console.log(card)

  
  return(
    <div className="create-card">
      <form onSubmit={onSubmit}>
      <h2>Create a new card</h2>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" onChange={(handleChange)}/>
        <label htmlFor="text">Text</label>
        <input type="text" id="text" name="text" onChange={(handleChange)}/>
        <label htmlFor="imgUrl">Image URL</label>
        <input type="text" id="imgUrl" name="imgUrl" onChange={(handleChange)}/>
        <button type="submit">Add a new Card</button>
      </form>

    </div>
  
  )
}

export default CreateCard