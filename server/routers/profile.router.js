const express = require("express");
const { authMiddleware } = require("../controllers/auth.controller");
const {
  fetchProfile,
  updateProfile,
} = require("../controllers/profile.controller");

const Router = express.Router();

Router.get("/", authMiddleware, fetchProfile);
// Router.put("/", authMiddleware, updateProfile);
Router.put("/", updateProfile);

module.exports = Router;
