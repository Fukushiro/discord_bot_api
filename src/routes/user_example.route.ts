import express from "express";
import { createUserExampleController } from "../controllers/user_example.controller";

export function UserExampleRoute(app: express.Application, baseUrl: string) {
  app.post(`${baseUrl}/create`, createUserExampleController);
}
