import { Router, type Request, type Response } from "express";
import { signInObject, signUpObject } from "../types/user.types.js";
import { User, Zap, ZapRun } from "@repo/db";
import jwt from "jsonwebtoken";

export const router = Router();

// get all zaps , get particular zap, create zap
router.post('/', async (req, res) => {
    const {zapier, actions, user_id} = req.body;

    await Zap.create({user_id, zapier, actions});
    return res.send({message:'zap created successfully'})
})

router.get('/',async  (req, res) =>{
    const user_id = req.query.user_id;
    console.log('user_id: ', user_id);
    if(!user_id) {
        throw new Error('user id not found')
    }
    const zaps = await Zap.findAll({
        where: {user_id}
    })
    return res.send(zaps)
})

router.get('/:zap_id', async (req, res) => {
    return  await Zap.findOne({where: {id : req.params.zap_id}, include: {
        model: ZapRun, as: 'zap_runs'
    }});
})