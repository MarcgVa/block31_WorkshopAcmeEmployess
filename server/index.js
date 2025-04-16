// imports here for express and pg
require("dotenv").config();
import express from 'express';
const app = express();
import pg from 'pg';
const PORT = 3000;
console.log(process.env.DATABASE_URL);
const client = new pg.Client(process.env.DATABASE_URL);
import cors from 'cors';



app.use(cors());

// static routes here (you only need these for deployment)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// app routes here
// app.get('/api/employees', (req, res) => {
//   const allEmployees = await client.query(
//     SELECT * FROM acme_hr_db
//   )
// });

// create your init function

// init function invocation
