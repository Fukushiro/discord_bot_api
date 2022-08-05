"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExampleRoute = void 0;
const user_example_controller_1 = require("../controllers/user_example.controller");
function UserExampleRoute(app, baseUrl) {
    app.post(`${baseUrl}/create`, user_example_controller_1.createUserExampleController);
}
exports.UserExampleRoute = UserExampleRoute;
