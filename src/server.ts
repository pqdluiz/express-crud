import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(5000, () =>
  console.log(`Server running to port http://localhost:5000`)
);
