const express = require("express");
const bodyParser = require("body-parser");
const client = require("./client");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  client.getAll(null, (err, data) => {
    if (err) {
      res.send("Could not get data");
    }
    res.send(data.customers);
  });
});

app.post("/create", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${PORT}`);
});
