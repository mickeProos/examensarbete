import React, { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="auth">
      <Register />
      <Login />
     {/* <Link to="/forgot-password"><p>forgot password?</p></Link> */}
    </div>
  );
};

const Login = () => {
  //session id
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    //try post login strings
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      //set response from the api to have a value of response.data.token
      setCookies("access_token", response.data.token);
      //set userID in localstorage when logged in //application//local storage//
      window.localStorage.setItem("userID", response.data.userID);
      //redirect to homepage
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form 
    username={username}
    setUsername={setUsername}
    password={password} 
    setPassword={setPassword}
    label="Login"
    onSubmit={onSubmit}
    />
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    //post new user to api
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
   <Form 
    username={username}
    setUsername={setUsername}
    password={password} 
    setPassword={setPassword}
    label="Register"
    onSubmit={onSubmit}
    />
  );
};

//using props to differentiate the two forms
const Form = ({username, setUsername, password, setPassword, label, onSubmit}) => {
    return (
      <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">{label}</button>
      </form>
    </div>
    )
}