const Pool = require("pg").Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'acme_hr_db'
});


module.exports = pool;