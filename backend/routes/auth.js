const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Register User
router.post("/register", async (req, res) => {
    try {
        console.log("Received data:", req.body); // Log the request data
        const { email, username, password } = req.body;
        
        if (!email || !username || !password) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10); // Ensure you add a salt round

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        // Create new user
        const newUser = new User({ email, username, password: hashedPassword });
        await newUser.save();

        res.status(200).json({ message: "Success registered" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Login
router.post('/signin', async (req, res) => {
    try {
        console.log("Sign-in request received:", req.body); // Log request body
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "User doesn't exist" });
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Wrong password" });
        }

        // Remove password from the response
        const { password, ...otherDetails } = user._doc;
        return res.status(200).json({ user: otherDetails });
    } catch (error) {
        console.error("Login failed:", error); // Log the error
        return res.status(500).json({ message: "Login failed", error: error.message });
    }
});

module.exports = router;