import express from "express";
import { database } from "./config/database";

const app = express();

database.run("omnion");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(5000, () =>
  console.log(`Server running to port http://localhost:5000`)
);
