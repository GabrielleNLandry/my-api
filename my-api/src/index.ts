import express from "express";
import pool from "./db";  // Correct relative path since both db.ts and index.ts are in the same src folder


const app = express();
const port = process.env.PORT || 3000;

// Example route to fetch games from the database
app.get("/api/games", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM games");  // Query the database
    res.json(result.rows);  // Send the data as JSON
  } catch (err) {
    console.error("Error querying database:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
