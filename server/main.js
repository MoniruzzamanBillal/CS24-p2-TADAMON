require("dotenv").config();
const express = require("express");

// local imports:
const { connectDb } = require("./services/db");
const cors = require("cors");

// routers:
const userRouter = require("./routers/user.router");
const authRouter = require("./routers/auth.router");

const app = express();
const PORT = process.env.PORT || 8000;

// connect to db:
connectDb();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// add routers:
app.get("/", async (req, res) => {
  res.send({ message: "server is running " });
});
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

// start server:
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
