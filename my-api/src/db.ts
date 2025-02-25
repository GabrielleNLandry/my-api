import { Pool } from "pg";  // Importing the Pool class from pg

const pool = new Pool({
    user: "db_2024_games_rqin_user",
    password: "aumEY7dPBSm8TYoJpPyXBMIZjVLjTGre",
    host: "dpg-cuv297t2ng1s73ft4ad0-a",
    database: "db_2024_games_rqin",
    port: 5432,
});

export default pool;  // Export the pool object as the default export
