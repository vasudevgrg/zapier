import express, { Request, Response} from "express";
import { OutboxMessage, ZapRun, sequelize } from "@repo/db";


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.post("/catch/:user_id/:zap_id", async (req: Request, res: Response) => {
  const zap_id = Number(req.params.zap_id);
  const user_id = Number(req.params.user_id);

  if (!Number.isInteger(zap_id) || !Number.isInteger(user_id)) {
    return res.status(400).send({ message: "invalid webhook ids" });
  }

  const transaction = await sequelize.transaction();

  try {
     const zapRun = await ZapRun.create(
      {
        zap_id,
        meta_data: req.body,
      },
      {transaction},
    );

    await OutboxMessage.create(
      {
        zap_run_id: zapRun.id,
      },
      {transaction},
    );

    await transaction.commit()
    res.send({message: 'this zap is handled'})
  } catch (error) {
    console.log(error)
    await transaction.rollback()
  }
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("✅ DB connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Unable to connect to DB:", error);
  }
}

startServer();
