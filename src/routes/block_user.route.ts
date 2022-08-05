import express from "express";
import { createBlockUserController } from "../controllers/block_user.controller";

export function BlockUserRoute(app: express.Application, baseUrl: string) {
  app.post(`${baseUrl}/create`, createBlockUserController);
}
