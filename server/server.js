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
  db.all(
  `SELECT 
    name,
    distance,
    price,
    veggies,
    category,
    address
  FROM 
    restaurants 
  WHERE 
    distance <= ?
  AND
    price <= ?
  AND
    veggies >= ?
  AND
    CASE 
      WHEN instr(?, "all") >= 1
        THEN instr("", category) = 0
      WHEN instr(?, "all") = 0
        THEN instr(?, category) >= 1
    END
  
  `, [query.distance, query.price, query.veggies, query.category, query.category, query.category], (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    console.log(query.category)

    res.status(200).json(rows);
  });
});


// db.close();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
