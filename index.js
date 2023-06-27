const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const cycleData = require("./data/cycle.json");

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

app.listen(port, () => {
  console.log("Cycle zoon port is running");
});
