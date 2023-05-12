import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const ResetPassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const onSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.put("http://localhost:3001/users/:id", {
        password
      });
      console.log(response.data)
      alert("password changed, now log in");
      navigate('/auth')
    } catch (error) {
      console.error(error);
    }
  };
  
 
return (
<>
  <h1 style={{color:"white"}}>Reset password</h1>
  <form action="" method="post" className="contactForm" onSubmit={onSubmit}>
    <label htmlFor="email">Username</label>
    <input type="email" name="username" id="username" onChange={(event) => setUsername(event.target.value)}/>
    <label htmlFor="password">New Password</label>
    <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
    <button type="submit" value="submit">Submit</button> 
  </form>
</>
  )
}

export default ResetPassword