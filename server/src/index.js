import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.js'
import { cardsRouter } from './routes/cards.js'  

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)
app.use("/cards", cardsRouter)

mongoose.connect("mongodb+srv://mickerooswahlbeck:MERNpassword123@cluster0.mzbutun.mongodb.net/Cluster0?retryWrites=true&w=majority",  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})



app.listen(3001, () => console.log('SERVER STARTED')); 