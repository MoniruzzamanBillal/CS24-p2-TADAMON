const express = require("express");
const { authMiddleware } = require("../controllers/auth.controller");
const {
  createUser,
  fetchUsers,
  fetchUser,
  updateUser,
} = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/", authMiddleware, fetchUsers);
router.get("/:userId", fetchUser);
// router.post("/", authMiddleware, createUser);
router.post("/", createUser);
router.put("/:userId", updateUser);

module.exports = router;
