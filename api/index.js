const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

dotenv.config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("Connected DB"))
  .catch((err) => console.log(err));

app.listen("5001", () => {
  console.log("server is runing");
});

app.use("/", (req, res) => {
  console.log("hello, this is main url");
});
