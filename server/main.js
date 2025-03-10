require("dotenv").config();
const express = require("express");

// local imports:
const { connectDb } = require("./services/db");

// routers:
const userRouter = require("./routers/user.router");

const app = express();
const PORT = process.env.PORT || 8000;

// connect to db:
connectDb();

app.use(express.json());

// add routers:
app.use("/api/users", userRouter);

// start server:
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
