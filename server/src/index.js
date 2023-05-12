import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.js'
import { cardsRouter } from './routes/cards.js'  
import { UserModel } from "./models/users.js";
import sendEmail from "./utils/sendEmail.js";
import dotenv from 'dotenv'
dotenv.config()


const app = express();


app.use(express.json());
app.use(cors());

//store data in these routes
app.use("/auth", userRouter)
app.use("/cards", cardsRouter)


//setting up connection to mongoDB
mongoose.connect("mongodb+srv://mickerooswahlbeck:MERNpassword123@cluster0.mzbutun.mongodb.net/Cluster0?retryWrites=true&w=majority",  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//send email
app.post("/api/sendemail", async (req, res) => {
  const { email } = req.body


  try {
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = email;
    const subject = "Reset password";
    const message = `
        <h3>Press the link down below to reset your password</h3>
        <a>http://localhost:3000/reset-password</a>
        <p>Regards React helper</p>
    `;

    await sendEmail(subject, message, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});


//get all users
app.get('/users', async(req,res) => {
  try {
    const result = await UserModel.find({})
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
})


//get one user
app.get('/users/:id', async(req,res, next) => {
  try {
    const result = await UserModel.findById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
})

//update user 
app.put('/users/:id', async(req,res) => {
   
  try{
    const {id} = req.params
    const updatePass = await UserModel.findByIdAndUpdate({_id: id}, req.body, {new: true, runValidators:true})
    res.status(200).json(updatePass)
  }catch(error) {
    res.status(500).json(error)
  }
})

const PORT = process.env.PORT || 3001

//set route & listen
app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`)); 