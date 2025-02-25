const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json());

// PostgreSQL Connection
const pool = new Pool({
    connectionString: "postgresql://db_2024_games_rqin_user:aumEY7dPBSm8TYoJpPyXBMIZjVLjTGre@dpg-cuv297t2ng1s73ft4ad0-a.ohio-postgres.render.com/db_2024_games_rqin",
    ssl: {
        rejectUnauthorized: false,
    }
});

// API Route to Fetch Game Data
app.get("/api/game-data", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM games"); // Change "games" to your table name
        res.json(result.rows);  // Return data as JSON array
    } catch (err) {
        console.error(err);
        res.status(500).send("Database error");
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
