const express = require("express");
const { authMiddleware } = require("../controllers/auth.controller")
const { createUser, fetchUsers } = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/", fetchUsers);
router.post("/", authMiddleware, createUser);

module.exports = router;
