import { Router, type Request, type Response } from "express";
import { signInObject, signUpObject } from "../types/user.types.js";
import { User } from "@repo/db";
import jwt from "jsonwebtoken";

export const router = Router();

router.post("/signup", async (req: Request, res: Response) => {
  const parsedData = signUpObject.safeParse(req.body);

  if (!parsedData.success) {
    throw new Error(" Data is nto parsed");
  }

  await User.create(req.body);
  return {message: 'User created successfully'}
});

router.post("/signin", async (req, res) => {
  const parsedData = signInObject.safeParse(req.body);

  if (!parsedData.success) {
    throw new Error(" Data is nto parsed");
  }

  const user = await User.findOne({ where: { email: req.body.email } });
  if(!user) {
    throw new Error('user not found')
  }
  if (user && user.password != req.body.password) {
    throw new Error("password is wrong");
  }
  const token = jwt.sign(user.id, "secret");

  return res.send({ token });
});

