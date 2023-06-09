"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePathNotFound = exports.handle500Errors = exports.handleJwtErrors = exports.handleCustomErrors = exports.handlePSQL400sErrors = void 0;
const handlePSQL400sErrors = (err, req, res, next) => {
    if (err.code === "23505" && err.constraint === "users_username_key") {
        res.status(409).send({ msg: "Username already exists" });
    }
    else if (err.code === "23505") {
        res.status(409).send({ msg: "Duplicate value already exists" });
    }
    else if (err.code === "22P02") {
        res.status(400).send({ msg: "Invalid value specified" });
    }
    else if (err.code === "23502" && err.column) {
        const { column } = err;
        res.status(400).send({ msg: `${column} is required` });
    }
    else if (err.code === "23502") {
        res.status(400).send({ msg: "Required value is missing" });
    }
    else if (err.code === "23503" &&
        err.constraint === "quizzes_category_fkey") {
        res.status(404).send({ msg: "Category not found" });
    }
    else if (err.code === "23503" &&
        err.constraint === "quizzes_username_fkey") {
        res.status(404).send({ msg: "Username not found" });
    }
    else if (err.code === "23503" &&
        err.constraint === "comments_quiz_id_fkey") {
        res.status(404).send({ msg: "quiz_id not found" });
    }
    else if (err.code === "23503") {
        res.status(404).send({ msg: "Referenced record not found" });
    }
    else {
        next(err);
    }
};
exports.handlePSQL400sErrors = handlePSQL400sErrors;
const handleCustomErrors = (err, req, res, next) => {
    if (err.status && err.msg) {
        res.status(err.status).send({ msg: err.msg });
    }
    else {
        next(err);
    }
};
exports.handleCustomErrors = handleCustomErrors;
const handleJwtErrors = (err, req, res, next) => {
    if (err.name === "JsonWebTokenError") {
        res.status(401).send({ msg: "Invalid refresh token" });
    }
    else if (err.name === "TokenExpiredError") {
        res.status(401).send({ msg: "Refresh token has expired" });
    }
    else {
        next(err);
    }
};
exports.handleJwtErrors = handleJwtErrors;
const handle500Errors = (err, req, res, next) => {
    console.log(err, "<<<---- 500 ERROR");
    res.status(500).send({ msg: "Server Error" });
};
exports.handle500Errors = handle500Errors;
const handlePathNotFound = (req, res) => {
    res.status(404).send({ msg: "Path not found" });
};
exports.handlePathNotFound = handlePathNotFound;
