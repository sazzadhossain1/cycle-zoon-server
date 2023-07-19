const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const cycleData = require("./data/cycle.json");
const newsData = require("./data/news.json");
const accessoriesData = require("./data/accessories.json");

app.get("/", (req, res) => {
  res.send("Cycle zoon server is running");
});

app.get("/cycleData", (req, res) => {
  res.send(cycleData);
});

app.get("/cycleData/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const cycles = cycleData.find((cycle) => cycle.id === id);
  res.send(cycles);
});

// ====================== //

app.get("/newsData", (req, res) => {
  res.send(newsData);
});

app.get("/newsData/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newsVar = newsData.find((news) => news.id === id);
  res.send(newsVar);
});

// ================= //
app.get("/accessoriesData", (req, res) => {
  res.send(accessoriesData);
});

app.listen(port, () => {
  console.log("Cycle zoon port is running");
});
