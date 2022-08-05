import express from "express";
import { checkNull } from ".";
import { createBlockUserModel } from "../models/blocker_user.model";

export async function createBlockUserController(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (!checkNull([req.body.username, req.body.isBlock])) {
    return res
      .status(400)
      .json({ message: "There are some missing parameters" });
  }

  const username: string = req.body.username;
  const isBlock: number = Number(req.body.isBlock);

  const worked = await createBlockUserModel(username, isBlock);
  if (worked) {
    return res.status(200).json({ message: "Success" });
  } else {
    return res.status(400).json({ message: "Failure" });
  }
}
