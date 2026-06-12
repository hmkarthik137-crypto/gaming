import express from "express";

import authMiddleware
from "../middleware/authMiddleware.js";

const router = express.Router();

// PROTECTED DASHBOARD

router.get(
    "/dashboard",
    authMiddleware,
    (req,res)=>{

        res.json({
            message:"Dashboard Access Granted",
            user:req.user
        });

    }
);

export default router;