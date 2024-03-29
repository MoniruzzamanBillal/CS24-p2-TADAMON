require("dotenv").config();
const express = require("express");

// local imports:
const { connectDb } = require("./services/db");

// routers:
const userRouter = require("./routers/user.router");
const authRouter = require("./routers/auth.router");
const profileRouter = require("./routers/profile.router");

const app = express();
const PORT = process.env.PORT || 8000;

// connect to db:
connectDb();

app.use(express.json());

// add routers:
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);

// start server:
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
