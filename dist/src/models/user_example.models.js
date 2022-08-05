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
exports.createUserExampleModel = exports.UserExampleModel = void 0;
const _1 = require(".");
const sequelize_1 = require("sequelize");
const user_example_service_1 = require("../services/user_example.service");
exports.UserExampleModel = _1.Database.define("user_example", {
    username: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    password: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
}, { freezeTableName: true });
function createUserExampleModel({ username, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hashedPass = yield (0, user_example_service_1.encript)(password);
            const ret = yield exports.UserExampleModel.create({
                username: username,
                password: hashedPass,
            });
            return ret;
        }
        catch (e) {
            console.log("catch createUserModel", e);
            return null;
        }
    });
}
exports.createUserExampleModel = createUserExampleModel;
