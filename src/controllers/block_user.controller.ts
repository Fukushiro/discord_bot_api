import express from "express";
import { checkNull } from ".";
import {
  BlockUser,
  createBlockUserModel,
  getAllBlockUserModel,
  getBlockUserByUsernameModel,
  updateBlockUserByIdModel,
} from "../models/blocker_user.model";

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

export async function getAllBlockUserController(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const users = await getAllBlockUserModel();
  if (users === null) {
    return res.status(500).json({ message: "Failure" });
  }

  return res.status(200).json({ message: "Success", data: users });
}

export async function blockUserController(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (!checkNull([req.body.username, req.body.isBlocked])) {
    return res
      .status(400)
      .json({ message: "There are some missing parameters" });
  }

  const username: string = req.body.username;
  const isBlocked = Number(req.body.isBlocked);
  console.log(isBlocked);

  const user: any = await getBlockUserByUsernameModel(username);

  if (user === null) {
    const created = await createBlockUserModel(username, isBlocked);

    if (!created) {
      return res.status(500).json({ message: "Failed" });
    }

    return res.status(200).json({ message: "Success" });
  }

  const worked: boolean = await updateBlockUserByIdModel(user.id, {
    isBlock: isBlocked,
  });
  if (worked) {
    return res.status(200).json({ message: "Success" });
  } else {
    return res.status(500).json({ message: "Failed" });
  }
}
