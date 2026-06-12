import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    res.send("Cart Route Working");
});

export default router;