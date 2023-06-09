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
exports.postUser = void 0;
const users_models_1 = require("../models/users-models");
const postUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        const { username, password } = newUser;
        if (!username || !password) {
            return res
                .status(400)
                .send({ msg: "Username and password are required" });
        }
        const createdUser = yield (0, users_models_1.insertUser)(username, password);
        return res.status(201).send({
            user: createdUser,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.postUser = postUser;
