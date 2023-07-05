"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("../controllers/auth-controllers");
const router = express_1.default.Router();
router.post("/login", auth_controllers_1.loginUser);
router.get("/protected", auth_controllers_1.protectedController);
router.post("/refresh-token", auth_controllers_1.refreshTokens);
router.post("/logout", auth_controllers_1.logoutUser);
exports.default = router;
