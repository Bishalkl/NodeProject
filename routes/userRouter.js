// Core modules
const path = require("path");
// External modules
const express = require("express");

// Local module
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils");

// creating the first middleware for home
userRouter.use("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

// export the modules
module.exports = userRouter;
