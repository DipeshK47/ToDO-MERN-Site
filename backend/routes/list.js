const express = require("express");
const router = express.Router();
const User = require("../models/user");
const List = require("../models/list");

// Create Task
router.post("/addtask", async (req, res) => {
    try {
        const { title, body, id } = req.body;
        const existingUser = await User.findById(id);

        if (existingUser) {
            const list = new List({ title, body, user: existingUser });
            await list.save();

            // Push list to user and save
            existingUser.list.push(list);
            await existingUser.save();

            return res.status(200).json(list);
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Update Task
router.put("/updatetask/:id", async (req, res) => {
    try {
        const { title, body } = req.body;

        // Update the task directly
        const list = await List.findByIdAndUpdate(req.params.id, { title, body }, { new: true });

        if (list) {
            await list.save();
            return res.status(200).json({ message: "Task Updated" });
        } else {
            return res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Delete Task
router.delete("/deletetask/:id", async (req, res) => {
    try {
        const { userId } = req.query; // Get userId from query string

        const existingUser = await User.findById(userId);

        if (existingUser) {
            await List.findByIdAndDelete(req.params.id);
            existingUser.list.pull(req.params.id);
            await existingUser.save();

            return res.status(200).json({ message: "Task Deleted" });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error deleting task:", error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Get All Tasks for a User
router.get('/getTasks/:id', async (req, res) => {
    try {
        const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });

        if (list.length !== 0) {
            return res.status(200).json({ list });
        } else {
            return res.status(200).json({ message: "No tasks" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;