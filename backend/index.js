import express from "express";
import cors from "cors";
import user from "./src/router/user.js";

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

app.use("/users", user);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

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
