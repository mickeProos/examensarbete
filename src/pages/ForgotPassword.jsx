import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("")

  const onSubmit = async(e) => {
    e.preventDefault()
    const data = {
      email
    }
    const response = await axios.post("http://localhost:3001/api/sendemail", data)
    console.log(response.data)
  }
  
return (
<>
  <h1 style={{color:"white"}}>Forgot password</h1>
  <form  className="contactForm" onSubmit={onSubmit}>
    <label htmlFor="email">Email/username</label>
    <input type="email" value={email} name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
    <button type="submit" value="submit">Submit</button> 
  </form>
</>
  )
}

export default ForgotPassword
