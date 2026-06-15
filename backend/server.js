import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import gameRoutes from "./routes/gameRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);

// Test Route
app.get("/test", (req, res) => {
  res.send("Backend Working");
});

// Path setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Frontend folder
const frontendPath = path.resolve(__dirname, "../frontend");
const indexPath = path.join(frontendPath, "index.html");

if (fs.existsSync(frontendPath)) {
  app.use(express.static(frontendPath));

  // Home / catch-all route for frontend client-side navigation
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api/")) {
      return next();
    }

    if (fs.existsSync(indexPath)) {
      return res.sendFile(indexPath);
    }

    res.status(404).send("Frontend index file not found");
  });
} else {
  console.warn(`Frontend folder not found at ${frontendPath}. API routes are still available.`);
}

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});