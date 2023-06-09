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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const connection_1 = __importDefault(require("../connection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const queryStr = "SELECT * FROM users WHERE username = $1";
    const queryResponse = yield connection_1.default.query(queryStr, [username]);
    const user = queryResponse.rows[0];
    if (!user) {
        throw { status: 401, msg: "User not found" };
    }
    const passwordMatched = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordMatched) {
        throw { status: 401, msg: "Incorrect password" };
    }
    const accessToken = jsonwebtoken_1.default.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: "15m" });
    const refreshToken = jsonwebtoken_1.default.sign({ id: user.user_id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
    const updateRefreshTokenQuery = "UPDATE users SET refresh_token = $1 WHERE user_id = $2 RETURNING *";
    yield connection_1.default.query(updateRefreshTokenQuery, [refreshToken, user.user_id]);
    return { accessToken, refreshToken };
});
exports.login = login;
