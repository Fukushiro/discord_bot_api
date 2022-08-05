"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_user_route_1 = require("./block_user.route");
const user_example_route_1 = require("./user_example.route");
exports.default = (app) => {
    (0, user_example_route_1.UserExampleRoute)(app, "/user");
    (0, block_user_route_1.BlockUserRoute)(app, "/block");
};
