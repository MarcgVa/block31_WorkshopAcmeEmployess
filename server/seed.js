require("dotenv").config();
const express = require("express");
const app = express();
const pg = require("pg");
const PORT = 3000;
const client = new pg.Client(process.env.DATABASE_URL);
console.log(process.env);
const init = async (req, res) => {
  try {
    await client.connect();
    const SQL = `
        DROP TABLE IF EXISTS users;
        CREATE TABLE users(
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name VARCHAR(100),
            is_admin BOOLEAN DEFAULT FALSE
        );
        INSERT INTO users(name, is_admin) VALUES ('Marc', true);
        INSERT INTO users(name) VALUES ('Michelle');
    `;
    await client.query(SQL);
    await client.end();
    console.log("The database is seeded");
  } catch (error) {
    console.error(error);
  }
};

init();
