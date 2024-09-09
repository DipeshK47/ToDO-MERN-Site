const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect("YOUR MANGODB PATH");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
    process.exit(1); // Exit the process with failure
  }
};

conn();
