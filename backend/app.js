const express = require("express")
const app = express()
require("./conn/conn.js")
const auth = require("./routes/auth")
const list = require("./routes/list")
const cors = require("cors")
app.get("/", (req, res) => {
    res.send("Hello")
})
app.use(cors(corsOptions)); // Place this before defining any routes
app.use(express.json());

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(1000, () => {
    console.log("Server Started...")
})

// CORS configuration to allow requests from frontend
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE',  // Allow these HTTP methods
  credentials: true,               // Allow sending cookies or credentials
};

app.use(cors(corsOptions));