const express = require("express");
const app = express();
const port = 3000;
const appURL = `http://localhost:${port}`;

//* Middlewave Assets

//* Routes
app.get("/", (req, res) => {
  console.log("Server del mio blog");
});
