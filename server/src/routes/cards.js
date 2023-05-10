import express from "express";
import { CardModel } from "../models/Cards.js";
import { verifyToken } from "./users.js";


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

export {router as cardsRouter}