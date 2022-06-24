"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envconfig_1 = require("./config/envconfig");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
var cors = require('cors');
app.use(cors());
app.use('/', routes_1.default);
app.get('/', (req, res) => {
    res.status(200).send(Date.now().toString());
});
let bodyParser = require('body-parser');
app.use(express_1.default.json({ limit: '70mb' }));
app.use(express_1.default.urlencoded({ limit: '70mb', extended: true }));
app.use(bodyParser.json());
try {
    app.listen(envconfig_1.SERVER_PORT, () => {
        console.log('Server is running at http://localhost:3000/');
    });
}
catch (err) {
    console.log(err);
}
//# sourceMappingURL=app.js.map