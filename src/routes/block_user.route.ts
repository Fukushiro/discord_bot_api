import express from "express";
import {
  blockUserController,
  createBlockUserController,
  getAllBlockUserController,
} from "../controllers/block_user.controller";

export function BlockUserRoute(app: express.Application, baseUrl: string) {
  app.post(`${baseUrl}/create`, createBlockUserController);
  app.get(`${baseUrl}/get/all`, getAllBlockUserController);
  app.put(`${baseUrl}/block`, blockUserController);
}
