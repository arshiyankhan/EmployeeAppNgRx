"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const envconfig_1 = require("../config/envconfig");
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    const jwt = require('jsonwebtoken');
    jwt.verify(token, envconfig_1.JWT_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
}
exports.authenticateToken = authenticateToken;
//# sourceMappingURL=token.js.map