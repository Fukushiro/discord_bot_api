import express from "express";
import { UserExampleRoute } from "./user_example.route";

export default (app: express.Application) => {
  UserExampleRoute(app, "/user");
};
