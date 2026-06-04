import { Router, type Request, type Response } from "express";
import { signInObject, signUpObject } from "../types/user.types.js";
import { User } from "@repo/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const router = Router();

router.post("/signup", async (req: Request, res: Response) => {
  console.log("req.body: ", req.body);
  const parsedData = signUpObject.safeParse(req.body);

  if (!parsedData.success) {
    throw new Error(" Data is nto parsed");
  }

  const existingUser = await User.findOne({
    where: { email: req.body.email },
  });

  if (existingUser) {
    throw new Error("User already exist.");
  }

  const encryptedPassword = await bcrypt.hash(req.body.password, 10);

  await User.create({ ...req.body, password: encryptedPassword });
  res.send({ message: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  const parsedData = signInObject.safeParse(req.body);

  if (!parsedData.success) {
    throw new Error(" Data is nto parsed");
  }

  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    throw new Error("user not found");
  }
  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password,
  );
  if (!isPasswordCorrect) {
    throw new Error("Passwrord is not correct.");
  }

  const token = jwt.sign(String(user.id), "secret");

  return res.send({ token });
});

router.get("/password/forget", async (req, res) => {
  const user = await User.findOne({ where: { email: req.query.email } });
  if (!user) {
    return res.status(204).send({ message: "User not found" });
  }
  return res.send({ messgae: "User found" });
});

router.put("/password/reset", async (req, res) => {
  const { email, password } = req.body.email;
  const updatedPassword = await bcrypt.hash(password, 10);

  await User.update({ password: updatedPassword }, { where: { email } });
});
