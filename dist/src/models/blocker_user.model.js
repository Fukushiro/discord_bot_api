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
exports.updateBlockUserByIdModel = exports.getBlockUserByUsernameModel = exports.getAllBlockUserModel = exports.createBlockUserModel = exports.BlockUser = void 0;
const _1 = require(".");
const sequelize_1 = require("sequelize");
exports.BlockUser = _1.Database.define("block_user", {
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isBlocked: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
}, { freezeTableName: true });
function createBlockUserModel(username, isBlocked) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ret = yield exports.BlockUser.create({
                username: username,
                isBlocked: isBlocked,
            });
            return ret;
        }
        catch (e) {
            return null;
        }
    });
}
exports.createBlockUserModel = createBlockUserModel;
function getAllBlockUserModel() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ret = yield exports.BlockUser.findAll();
            return ret;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    });
}
exports.getAllBlockUserModel = getAllBlockUserModel;
function getBlockUserByUsernameModel(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ret = yield exports.BlockUser.findOne({ where: { username: username } });
            return ret;
        }
        catch (e) {
            return null;
        }
    });
}
exports.getBlockUserByUsernameModel = getBlockUserByUsernameModel;
function updateBlockUserByIdModel(id, { username, isBlock }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (username) {
                yield exports.BlockUser.update({
                    username: username,
                }, {
                    where: {
                        id: id,
                    },
                });
            }
            if (isBlock || isBlock === 0) {
                yield exports.BlockUser.update({ isBlocked: isBlock }, { where: { id: id } });
            }
            return true;
        }
        catch (e) {
            return false;
        }
    });
}
exports.updateBlockUserByIdModel = updateBlockUserByIdModel;
