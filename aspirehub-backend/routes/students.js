const express = require("express");
const router = express.Router();

// Define a route
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);
});

module.exports = router;
