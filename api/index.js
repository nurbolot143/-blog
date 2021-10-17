const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/categories");
const postRoute = require("./routes/posts");

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.jpeg");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Image uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5001", () => {
  console.log("server is runing");
});

app.use("/", (req, res) => {
  console.log("hello, this is main url");
});
