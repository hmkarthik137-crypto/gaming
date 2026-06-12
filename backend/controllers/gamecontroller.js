import Game from "../models/Game.js";
import imagekit from "../config/imagekit.js";


// =========================
// CREATE GAME
// =========================

export const createGame = async (req, res) => {
  try {

    const { title, price, downloadUrl } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Image required",
      });
    }

    // Upload image to ImageKit

    const uploadedImage = await imagekit.upload({
      file: req.file.buffer,
      fileName: Date.now() + "-" + req.file.originalname,
      folder: "/games",
    });

    // Save game in MongoDB

    const game = await Game.create({
      title,
      price,
      downloadUrl,
      image: uploadedImage.url,
    });

    res.status(201).json(game);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};


// =========================
// GET GAMES
// =========================

export const getGames = async (req, res) => {
  try {

    const games = await Game.find();

    res.json(games);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};