const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const userRouter = require("./users/user-router");
const authRouter = require("./auth/auth-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ API: "Online" });
});

module.exports = server;

