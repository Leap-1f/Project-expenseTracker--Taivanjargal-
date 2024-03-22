import postgres from "postgres";
import dotenv from "dotenv";
import express, { json } from "express";
import fs from "fs";
import cors from "cors";
import { sql } from "./config/database.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log(data);
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
// app.post("/users", (request, response) => {
//   const newUser = request.body;
//   try {
//     const data = JSON.parse(fs.readFileSync("database.json", "utf-8"));
//     data.push(newUser);
//     fs.writeFileSync("database.json", JSON.stringify(data));
//     response.status(200).send("User data saved successfully");
//   } catch (error) {
//     console.error("Error:", error);
//     response.status(500).send("Internal server error");
//   }
// });

// app.get('/users', async (req, res) => {
// const data = await sql`SELECT * FROM users`
// console.log(data);
// res.send ('amjilttai hiigdlee ')
// })
// app.post('/users/createTable', async (req, res) => {
// const data = await sql`CREATE TABLE usersData(id SERIAL PRIMARY KEY, name TEXT NOT NULL , email TEXT NOT NULL)`
// console.log(data);
// res.send ('amjilttai hiigdlee ')
// })
// app.delete('/users/dropTable', async (req, res) => {
// const data = await sql`DROP TABLE usersData`
// console.log(data);
// res.send ('amjilttai hiigdlee ')
// })

// dotenv.config();
// console.log(process.env.PGDATABASE);
