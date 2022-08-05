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
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        return queryInterface.createTable("user_example", {
            // need to add
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            //
            username: { type: sequelize_1.DataTypes.STRING, allowNull: false },
            password: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            //need to add
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
            //
        });
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        queryInterface.dropTable("user_example");
    }),
};
