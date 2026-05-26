import { Router, type Request, type Response } from "express";
import { signInObject, signUpObject } from "../types/user.types.js";
import { Action, AvailableAction, AvailableTrigger, Trigger, User, Zap, ZapRun } from "@repo/db";
import jwt from "jsonwebtoken";

export const router = Router();

type ZapActionPayload = {
  id: number;
  metadata?: Record<string, unknown>;
};

// get all zaps , get particular zap, create zap
router.post("/", async (req, res) => {
  const { trigger, actions = [], user_id } = req.body as {
    trigger: {
      id: number;
      metadata?: Record<string, unknown>;
    };
    actions?: ZapActionPayload[];
    user_id: number;
  };
  console.log("actions: ", actions);
  console.log("trigger: ", trigger);

  try {
    const zap = await Zap.create({
      user_id,
    });
    console.log("zap: ", zap);

    const tgr = await Trigger.create({
      trigger_id: trigger.id,
      metadata: trigger.metadata,
      zap_id: zap.id,
    });
    console.log("tgr: ", tgr);

    await Promise.all(
      actions.map((action, idx) =>
        Action.create({
        action_id: action.id,
        metadata: action.metadata,
        order: idx,
        zap_id: zap.id,
        }),
      ),
    );
    return res.send({ message: "zap created successfully", webhook: 'http://localhost:8080/' });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).send({ message: "failed to create zap" });
  }
});

router.get("/", async (req, res) => {
  const user_id = Number(req.query.user_id);
  console.log("user_id: ", user_id);
  if (!Number.isInteger(user_id)) {
    throw new Error("user id not found");
  }
  const zaps = await Zap.findAll({
    where: { user_id },
    include: [
      {
        model: Action,
        as: "actions",
        include: [
          {
            model: AvailableAction,
            as: "available_action",
          },
        ],
      },
      {
        model: Trigger,
        as: "trigger",
        include: [
          {
            model: AvailableTrigger,
            as: "available_trigger",
          },
        ],
      },
    ],
  });
  return res.send(zaps);
});

router.get("/:zap_id", async (req, res) => {
  const zap_id = Number(req.params.zap_id);

  if (!Number.isInteger(zap_id)) {
    return res.status(400).send({ message: "invalid zap id" });
  }

  return await Zap.findOne({
    where: { id: zap_id },
    include: {
      model: ZapRun,
      as: "zap_runs",
    },
  });
});

router.get("/available", async (req, res) => {
  return await AvailableTrigger.findAll();
});

router.get("/available", async (req, res) => {
  return await AvailableTrigger.findAll();
});
