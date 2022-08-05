"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserExampleController = void 0;
const _1 = require(".");
const user_example_models_1 = require("../models/user_example.models");
function createUserExampleController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, _1.checkNull)([req.body.username, req.body.password])) {
            return res
                .status(400)
                .json({ message: "There are some missing parameters" });
        }
        const username = req.body.username;
        const password = req.body.password;
        const worked = yield (0, user_example_models_1.createUserExampleModel)({
            username: username,
            password: password,
        });
        if (worked) {
            return res.status(200).json({ message: "Success" });
        }
        else {
            return res.status(400).json({ message: "Failure" });
        }
    });
}
exports.createUserExampleController = createUserExampleController;
