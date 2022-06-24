"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const token_1 = require("../interceptors/token");
const employees_1 = require("./employees");
const login_1 = require("./login");
const router = express_1.default.Router();
// login
router.post('/login', login_1.loginRoute);
// employee
router.get('/employees', token_1.authenticateToken, employees_1.getEmployees);
exports.default = router;
//# sourceMappingURL=index.js.map