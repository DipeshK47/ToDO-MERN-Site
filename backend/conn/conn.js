const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect("mongodb+srv://dr2034:Kx26z2rqTWIHhMMd@cluster0.9pfku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
    process.exit(1); // Exit the process with failure
  }
};

conn();