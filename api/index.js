const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("Connected DB"))
  .catch((error) => console.log(error));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen("5001", () => {
  console.log("server is runing");
});

app.use("/", (req, res) => {
  console.log("hello, this is main url");
});
