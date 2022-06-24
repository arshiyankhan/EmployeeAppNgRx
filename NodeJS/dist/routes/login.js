"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoute = void 0;
const envconfig_1 = require("../config/envconfig");
const users_json_1 = __importDefault(require("../data/users.json"));
function getUser(username, password) {
    for (let i = 0; i < users_json_1.default.length; i++) {
        const user = users_json_1.default[i];
        if (user['username'] === username && user['password'] === password) {
            return { id: user['id'], username: user['username'] };
        }
    }
    return null;
}
function loginRoute(req, res) {
    const { username, password } = req.query;
    const jwt = require('jsonwebtoken');
    let user = getUser(username.toString(), password.toString());
    if (user === null)
        return res.status(403).json({
            "error": "Invalid credentials!"
        });
    const token = jwt.sign(user, envconfig_1.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({
        "token": token
    });
}
exports.loginRoute = loginRoute;
//# sourceMappingURL=login.js.map