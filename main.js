require("dotenv").config();
const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/Instagram",(req,res) => {
    res.send("afrozz_99");
});

app.get("/login",(req,res) => {
    res.send("<h1>Please login to my page!</h1>");
});

app.get("/youtube",(req,res) => {
    res.send("<h2>My Youtube channell</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});