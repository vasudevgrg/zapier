import express from 'express';
import cors from 'cors';
import { sequelize } from "@repo/db";
import {router as UserROuter }  from './router/user.router.js'
import {router as ZapRouter }  from './router/zap.router.js'
import {router as TriggerROuter }  from './router/trigger.router.js'
import {router as ActionRouter }  from './router/action.router.ts.js'

const app = express();

app.use(express.json());
app.use(cors());



app.use('/user',UserROuter )
app.use('/zap',ZapRouter )
app.use('/trigger',TriggerROuter )
app.use('/action',ActionRouter )

async function startServer() {
  await sequelize.authenticate();
  app.listen(8081, ()=> {console.log('listening to 8081')});
}

startServer();
