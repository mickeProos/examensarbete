import express from "express";
import mongoose from "mongoose";
import { CardModel } from "../models/Cards.js";
import { UserModel } from "../models/users.js";
import { verifyToken } from "./users.js";


const router = express.Router()

router.get("/", async(req, res) => {
  try {
    const response = await CardModel.find({});
    res.json(response)
  } catch (err) {
    res.json(err)
  }
})

router.post("/", verifyToken, async(req, res) => {
  const card = new CardModel(req.body)
  try {
    await card.save();
    res.json(card)
  } catch (err) {
    res.json(err)
  }
})

router.put("/", async(req, res) => {

  try {
    const card = await CardModel.findById(req.body.cardID);
    const user = await UserModel.findById(req.body.userID);
    user.savedCards.push(card);
    await user.save();
    res.json({savedCards: user.savedCards});
  } catch (err) {
    res.json(err);
  }
})

router.get("/savedCards/ids", async(req,res) =>{
  try {
    const user = await UserModel.findById(req.body.userID);
    res.json({savedCards: user?.savedCards});
  } catch (err) {
    res.json(err);
  }
})

router.get("/savedCards", async(req,res) =>{
  try {
    const user = await UserModel.findById(req.body.userID);
    const savedCards = await CardModel.find({
      _id: {$in: user.savedCards},
    })
    res.json(savedCards);
  } catch (err) {
    res.json(err);
  }
})

export {router as cardsRouter}