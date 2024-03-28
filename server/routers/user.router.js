const express = require("express");
const { createUser, fetchUsers } = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/", fetchUsers);
router.post("/", createUser);

module.exports = router;
