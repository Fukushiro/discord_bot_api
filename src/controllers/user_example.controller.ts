import express from "express";
import { checkNull } from ".";
import { createUserExampleModel } from "../models/user_example.models";

export async function createUserExampleController(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (!checkNull([req.body.username, req.body.password])) {
    return res
      .status(400)
      .json({ message: "There are some missing parameters" });
  }

  const username = req.body.username;
  const password = req.body.password;

  const worked = await createUserExampleModel({
    username: username,
    password: password,
  });
  if (worked) {
    return res.status(200).json({ message: "Success" });
  } else {
    return res.status(400).json({ message: "Failure" });
  }
}
