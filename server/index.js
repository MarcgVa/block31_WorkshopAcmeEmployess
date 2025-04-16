// imports here for express and pg
const express = require("express");
const app = express();
const pg = require("pg");
const PORT = 3000;
//const client = new pg.Client(process.env.DATABASE_URL);
const cors = require("cors");
const pool = require("./db")


app.use(cors());

// static routes here (you only need these for deployment)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// app routes here
app.get("/api/employees", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM users");
    res.status(200).json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

// create your init function
// seed.js has the init function
// init function invocation
