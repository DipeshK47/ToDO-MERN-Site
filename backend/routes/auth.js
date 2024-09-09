const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs")
// Register User
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password)

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        // Create new user
        const newUser = new User({ email, username, password: hashedPassword });
        await newUser.save();
        
        res.status(200).json({ user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Login

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user){
            return res.status(400).json({message: "user doesnt exists"})
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)
        if (!isPasswordCorrect){
            res.status(400).json({message: "Wrong password"})
        }
        const {password, ...others} = user._doc;
         res.status(400).json({ others })
    } catch (error) {
         res.status(400).json({message: "login failed"})
    }
})

module.exports = router;