import { AvailableTrigger } from "@repo/db";
import { Router, type Request, type Response } from "express";
export const router = Router();

router.get('/available', async (req, res) =>{
    return res.send(await AvailableTrigger.findAll());
})
