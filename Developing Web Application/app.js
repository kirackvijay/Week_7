// require  express
const express = require('express');
const app = express();

// require cors 
const cors = require('cors');

// create a port
const port = 3800;

// connect the database
require('./src/db/connection');

// Apply Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const StudentTask = require("./src/models/studentTask");

app.get("/", async (req, res) => {
  try {
    const gettask = await StudentTask.find({});
    res.status(201).send(gettask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
});

app.post("/posttask", async (req, res) => {
  try {
    const insertData = await StudentTask.create(req.body);
    console.log("Created Task Instance:", insertData);
    res.status(201).json({ message: "Task added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error on post Task" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
