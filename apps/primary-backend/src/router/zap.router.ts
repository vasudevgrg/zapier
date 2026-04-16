import { Router, type Request, type Response } from "express";
import { signInObject, signUpObject } from "../types/user.types.js";
import { User, Zap } from "@repo/db";
import jwt from "jsonwebtoken";

export const router = Router();

// get all zaps , get particular zap, create zap
router.post('/', async (req, res) => {
    const {zapier, actions, user_id} = req.body;

    await Zap.create({user_id, zapier, actions});
    return res.send({message:'zap created successfully'})
})

router.get('/:zap_id', async (req, res) => {
    
})