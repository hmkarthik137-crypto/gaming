import User from "../models/User.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

// ================= REGISTER =================

export const register = async (req,res)=>{

    try{

        const {
            username,
            email,
            password
        } = req.body;

        // CHECK EMAIL

        const existingUser =
        await User.findOne({email});

        if(existingUser){

            return res.json({
                message:"Email already exists"
            });
        }

        // HASH PASSWORD

        const hashedPassword =
        await bcrypt.hash(password,10);

        // CREATE USER

        const user =
        await User.create({

            username,
            email,
            password:hashedPassword

        });

        res.json({
            message:"User registered",
            user
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// ================= LOGIN =================

export const login = async (req,res)=>{

    try{

        const {
            email,
            password
        } = req.body;

        // FIND USER

        const user =
        await User.findOne({email});

        if(!user){

            return res.json({
                message:"User not found"
            });
        }

        // CHECK PASSWORD

        const isMatch =
        await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){

            return res.json({
                message:"Invalid password"
            });
        }

        // TOKEN

        const token =
        jwt.sign(

            {
                id:user._id
            },

            process.env.JWT_SECRET,

            {
                expiresIn:"7d"
            }

        );

        res.json({

            message:"Login successful",

            token,

            user

        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};