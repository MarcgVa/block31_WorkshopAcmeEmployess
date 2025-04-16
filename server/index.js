// imports here for express and pg
require('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg');
const PORT = 3000;
//const client = new pg.Client(process.env.DATABASE_URL);
const cors = require('cors');
const pool = require("./db");

app.use(cors());

// static routes here (you only need these for deployment)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
 
// app routes here
app.get('/api/employees', async (req, res) => {
  try {
    //res.status(200).send('right api');
    const SQL = `SELECT * FROM users`;
    const response = await pool.query(SQL);
    res.status(200).json(response.rows);
  } catch (error) { 
    console.error(error);
    res.status(400).send(error);
  }
});

// create your init function

// init function invocation
