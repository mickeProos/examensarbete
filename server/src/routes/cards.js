import express from "express";
import { CardModel } from "../models/Cards.js";
import { verifyToken } from "./users.js";
import { UserModel } from "../models/users.js";


const router = express.Router()

//get cards
router.get("/", async(req, res) => {
  try {
    const response = await CardModel.find({});
    res.json(response)
  } catch (err) {
    res.json(err)
  }
})

// post cards
router.post("/", verifyToken, async(req, res) => {
  const card = new CardModel(req.body)
  try {
    await card.save();
    res.json(card)
  } catch (err) {
    res.json(err)
  }
})

//save card
router.put("/", async (req,res) => {
  
  try{
    const card = await CardModel.findById(req.body.cardID)
    const user = await UserModel.findById(req.body.userID)
    user.savedCards.push(card)
    await user.save()
    res.json({savedCards: user.savedCards}) 
  } catch(err) {
    res.json(err)
  }
})

//get saved cards
router.get("/savedCards/ids/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID)
    res.json({savedCards: user?.savedCards})
  }catch (err) {
    res.json(err)
  }
})

// get single saved card
router.get("/savedCards/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID)
    const savedCards = await CardModel.find({
      _id: {$in: user.savedCards}
    })
    res.json({savedCards})
  }catch (err) {
    res.json(err)
  }
})



export {router as cardsRouter}