const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Hardcoded MongoDB URI
    const mongoURI = "mongodb+srv://safibro786:safi.4659@cluster0.4vw4j.mongodb.net/Store?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your actual URI
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected Successfully...!: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
