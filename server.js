const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
const imageUpload = require("express-fileupload");

const authRoute = require("./routes/auth.route");
const tourPackageRoute = require("./routes/tour-package.route");
const tourRoute = require("./routes/tour.route");
const orderRoute = require("./routes/order.route");

//conect db
dotenv.config();
mongoose.connect(process.env.MONGODB_ATLAS_URI, () => {
  console.log("connected to Mongodb");
});

//config
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(imageUpload({ limits: { fileSize: 1 * 1024 * 1024 } }));

//routes
app.use("/api/tour-packages", tourPackageRoute);
app.use("/api/tours", tourRoute);
app.use("/api/auth", authRoute);
app.use("/api/orders", orderRoute);

//start server
app.listen(process.env.PORT, () => {
  console.log("server is running...");
});
