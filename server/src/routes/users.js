import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/users.js'


const router = express.Router();

//get data from whoever is making the api request to this end point (req) 
//send data back to whoever made the api request (res)
router.post("/register", async(req, res) => {
  const { username, password } = req.body

  //find username in mongoDB collection
  const user = await UserModel.findOne({username}) 

  // If user exists give status code
  if (user) {
   return res.status(400).json ({message: "User already exists"})
  } 

  //hashing password with bcrypt
  const hashedPassword = await bcrypt.hash(password, 10)

  //when register is successful
  const newUser = new UserModel({ username, password: hashedPassword})
  await newUser.save()
 res.json({message: "User registered successfully"}) 
});

//same as register but send login 
router.post("/login", async (req, res) => {
  const {username, password} = req.body

  const user = await UserModel.findOne({ username })

  //If the username user-collection do not match
  if (!user) {
    return  res
    .status(400)
    .json({message: "Username is incorrect"})
  }

  const isPassWordValid = await bcrypt.compare(password, user.password)

//If the password in the user-collection do not match the cryptated string
  if(!isPassWordValid) {
    return res
    .status(400)
    .json({message: "Username or password is incorrect!"})
  }
//create token with jwt 
  const token = jwt.sign({id: user._id}, "secret")
  res.json({token, userID: user._id}) 
})

export {router as userRouter}  



//middleware//

export const verifyToken = (req,res,next) => {
  const token = req.headers.authorization
    if (token) {
      jwt.verify(token,"secret", (err) => {
        if(err) return res.sendStatus(403)
        next()
      })
    }else {
      res.sendStatus(401)
    }
    } 