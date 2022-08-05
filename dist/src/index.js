"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const path = require("path");
console.log(path.resolve("config", "config.ts"));
//create app
const app = (0, express_1.default)();
//port to use
const PORT = 8000;
//configure express
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.json());
app.get("/", (req, res) => res.send("Express + TypeScript Server"));
(0, routes_1.default)(app);
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
