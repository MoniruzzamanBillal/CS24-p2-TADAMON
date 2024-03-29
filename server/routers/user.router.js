const express = require("express");
const { authMiddleware } = require("../controllers/auth.controller");
const {
  createUser,
  fetchUsers,
  fetchUser,
  updateUser,
  deleteUser,
  fetchUserRoles,
  fetchAvailableRoles,
} = require("../controllers/user.controller.js");

const router = express.Router();

// fetch:
// router.get("/", authMiddleware, fetchUsers);
router.get("/", fetchUsers);
router.get("/roles", fetchAvailableRoles);
// router.get("/:userId", authMiddleware, fetchUser);
router.get("/:userId", fetchUser);
// router.get("/:userId/roles", authMiddleware, fetchUserRoles);
router.get("/:userId/roles", fetchUserRoles);

// add:
router.post("/", authMiddleware, createUser);

// update: function for update a user
router.put("/:userId", updateUser);

// delete:
// router.delete("/:userId", authMiddleware, deleteUser);
router.delete("/:userId", deleteUser);

module.exports = router;
