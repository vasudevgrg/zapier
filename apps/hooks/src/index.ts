import express, { Request, Response} from "express";
import { OutboxMessage, ZapRun, sequelize } from "@repo/db";


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.post("/catch/:user_id/:zap_id", async (req: Request, res: Response) => {
  const zap_id = req.params.zap_id;
  const user_id = req.params.user_id;

  const transaction = await sequelize.transaction();

  try {
     await ZapRun.create(
      {
        zap_id,
        meta_data: req.body,
      },
      {transaction},
    );

    await OutboxMessage.create(
      {
        zap_id,
      },
      {transaction},
    );

    await transaction.commit()
  } catch (error) {
    console.log(error)
    await transaction.rollback()
  }
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("✅ DB connected successfully");

    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Unable to connect to DB:", error);
  }
}

startServer();
