import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  title: { type: String, required: true},
  text: [{ type: String, required: true }],
  imgUrl: { type: String, required: true },
  userOwner: {type: mongoose.Schema.Types.ObjectId, ref:"users", required:true}

});

export const CardModel = mongoose.model("cards", CardSchema);