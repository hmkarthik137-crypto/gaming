import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  rating: Number,
  downloadUrl: String,
});

const Game = mongoose.model("Game", gameSchema);

export default Game;