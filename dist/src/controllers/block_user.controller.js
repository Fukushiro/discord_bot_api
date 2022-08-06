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
exports.blockUserController = exports.getAllBlockUserController = exports.createBlockUserController = void 0;
const _1 = require(".");
const blocker_user_model_1 = require("../models/blocker_user.model");
function createBlockUserController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, _1.checkNull)([req.body.username, req.body.isBlock])) {
            return res
                .status(400)
                .json({ message: "There are some missing parameters" });
        }
        const username = req.body.username;
        const isBlock = Number(req.body.isBlock);
        const worked = yield (0, blocker_user_model_1.createBlockUserModel)(username, isBlock);
        if (worked) {
            return res.status(200).json({ message: "Success" });
        }
        else {
            return res.status(400).json({ message: "Failure" });
        }
    });
}
exports.createBlockUserController = createBlockUserController;
function getAllBlockUserController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield (0, blocker_user_model_1.getAllBlockUserModel)();
        if (users === null) {
            return res.status(500).json({ message: "Failure" });
        }
        return res.status(200).json({ message: "Success", data: users });
    });
}
exports.getAllBlockUserController = getAllBlockUserController;
function blockUserController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        if (!(0, _1.checkNull)([req.body.username, req.body.isBlocked])) {
            return res
                .status(400)
                .json({ message: "There are some missing parameters" });
        }
        const username = req.body.username;
        const isBlocked = Number(req.body.isBlocked);
        console.log(isBlocked);
        const user = yield (0, blocker_user_model_1.getBlockUserByUsernameModel)(username);
        if (user === null) {
            const created = yield (0, blocker_user_model_1.createBlockUserModel)(username, isBlocked);
            if (!created) {
                return res.status(500).json({ message: "Failed" });
            }
            return res.status(200).json({ message: "Success" });
        }
        const worked = yield (0, blocker_user_model_1.updateBlockUserByIdModel)(user.id, {
            isBlock: isBlocked,
        });
        if (worked) {
            return res.status(200).json({ message: "Success" });
        }
        else {
            return res.status(500).json({ message: "Failed" });
        }
    });
}
exports.blockUserController = blockUserController;
