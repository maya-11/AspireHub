const express = require("express");
const mongoose = require("./db"); // Import the mongoose connection from db.js

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", require("./routes/students"));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
