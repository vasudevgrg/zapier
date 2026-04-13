import express from 'express';
import cors from 'cors';
import { sequelize } from "@repo/db";
import {router as UserROuter }  from './router/user.router.js'

const app = express();

app.use(express.json());
app.use(cors());



app.use('/user',UserROuter )

async function startServer() {
  await sequelize.authenticate();
  app.listen(8081, ()=> {console.log('listening to 8081')});
}

startServer();
