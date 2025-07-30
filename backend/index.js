const express = require("express");
const connectDB = require("./Config/connection");
const cloudinary = require("cloudinary");
const expressFileUpload = require("express-fileupload");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");

const app = express();
app.use(cors());

// Database Connect
connectDB();

// Body Parser
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));
app.use(express.json());

// Cookies Parser
app.use(cookieParser());

// Use Express File Upload
app.use(expressFileUpload());

// Config Cloudinary
cloudinary.config({
  cloud_name: "dzavnlfj9", // Replace with your actual cloud name
  api_key: "664596811844284", // Replace with your actual API key
  api_secret: "STNq9A8XdoPhZbP4VVgBeESWP8Q", // Replace with your actual API secret
});

const PORT = 5000; // Set the port directly
const HOST = '0.0.0.0';

app.listen(PORT, HOST, "localhost", () => {
  console.log(`Server Running At http://${HOST}:${PORT}`);
});

// Load Route
app.use("/api/user", userRoutes);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

// Access Front End Static Files
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Access Front End All URL
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});
