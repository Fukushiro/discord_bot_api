"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
const db_service_1 = require("../services/db.service");
(0, dotenv_1.config)();
let Database = new sequelize_1.Sequelize(db_service_1.configuration);
exports.Database = Database;
