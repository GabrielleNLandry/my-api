import express, { Request, Response } from "express";
import { Pool } from "pg";

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: "postgresql://db_2024_games_rqin_user:db_2024_games_rqin_user@dpg-cuv297t2ng1s73ft4ad0-a.ohio-postgres.render.com:5432/db_2024_games_rqin"
});

app.get("/your-endpoint", async (req: Request, res: Response) => {
    try {
        // Example query, replace with your actual query
        const result = await pool.query("SELECT id_column, name_column, genre_column, duration_column, cost_column, sessions_played_column FROM your_table");
        res.json(result.rows);  // Send the data back as JSON
    } catch (err) {
        console.error("Error querying database:", err);
        res.status(500).send("Error querying database");
    }
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
