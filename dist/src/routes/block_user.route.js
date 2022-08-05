"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockUserRoute = void 0;
const block_user_controller_1 = require("../controllers/block_user.controller");
function BlockUserRoute(app, baseUrl) {
    app.post(`${baseUrl}/create`, block_user_controller_1.createBlockUserController);
    app.get(`${baseUrl}/get/all`, block_user_controller_1.getAllBlockUserController);
    app.put(`${baseUrl}/block`, block_user_controller_1.blockUserController);
}
exports.BlockUserRoute = BlockUserRoute;
