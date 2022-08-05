import express from "express";
import { BlockUserRoute } from "./block_user.route";
import { UserExampleRoute } from "./user_example.route";

export default (app: express.Application) => {
  UserExampleRoute(app, "/user");
  BlockUserRoute(app, "/block");
};
