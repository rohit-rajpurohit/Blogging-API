const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/blog", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.info("Database connected successfully");
  })
  .catch(() => {
    console.error("Database connection failed");
  });

const PORT = 8080;

app.listen(PORT, () => {
  console.info(`the server is running on port: ${PORT}`);
});

app.use("/user", userRoute);
app.use("/admin", adminRoute);
