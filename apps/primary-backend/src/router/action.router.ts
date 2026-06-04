import { AvailableAction, AvailableTrigger } from "@repo/db";
import axios from "axios";
import { Router, type Request, type Response } from "express";
export const router = Router();

router.get('/available', async (req, res) =>{
   return res.send(await AvailableAction.findAll());
})

router.get('/google-sheets', async(req, res) => {
   const accessToken = req.query.access_token;

   const googleSheets = await axios.get(process.env.LIST_SPREEDSHEET_URL,{
      headers: {
         Authorization: `Bearer ${accessToken}`
      }
   } )

   res.send({data: googleSheets});
})

router.get('/google-sheets/columns', async (req, res) => {
   
})
