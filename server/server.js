const express = require("express");
const cors = require("cors");
const app = express();
const sqlite3 = require('sqlite3').verbose();


var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


let db = new sqlite3.Database('./restaurants.db');


app.get("/restaurants", (req, res, next) => {
  var {query} = req;
  db.get(`SELECT * FROM restaurants where distance > ?`, [query.distance], (err, row) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.status(200).json(row);
  });
});

// db.close();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
