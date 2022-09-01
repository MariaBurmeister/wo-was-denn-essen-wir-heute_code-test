const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./restaurants.db', (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    } else {

        db.run('CREATE TABLE restaurants( \
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            name NVARCHAR(20)  NOT NULL,\
            distance INTEGER  NOT NULL,\
            price INTEGER,\
            veggies INTEGER,\
            address NVARCHAR(100),\
            category NVARCHAR(20)\
        )', (err) => {
            if (err) {
                console.log(err);
            }
            let insert = 'INSERT INTO restaurants (name, distance, price, veggies, address, category) VALUES (?,?,?,?,?,?)';
            db.run(insert, ["Perle", 1, 1, 3, "Spitalerstraße 22, 20095 Hamburg", "Alles"]);
            db.run(insert, ["Europapassage", 1, 2, 3, "Ballindamm 40 EG2, 20095 Hamburg", "Alles"]);
            db.run(insert, ["Max & Consorten", 3, 1, 2, "Spadenteich 1, 20099 Hamburg", "Hausmannskost"]);
            db.run(insert, ["Luigi's", 3, 2, 3, "Ditmar-Koel-Straße 21, 20459 Hamburg", "Pizza / Pasta"]);
            db.run(insert, ["Bella Italia", 2, 1, 2, "Brandstwiete 58, 20457 Hamburg", "Pizza / Pasta"]);
            db.run(insert, ["Restaurant Kabul", 3, 1, 2, "Steindamm 53, 20099 Hamburg", "Sonstiges"]);
            db.run(insert, ["Goot", 2, 3, 1, "Depenau 10, 20095 Hamburg", "Hausmannskost"]);
            db.run(insert, ["O-ren Ishii", 2, 3, 3, "Kleine Reichenstraße 18, 20457 Hamburg", "Asiatisch"]);
            db.run(insert, ["Better Burger Company", 1, 2, 3, "Rosenstraße Ecke, Gertrudenkirchhof, 20095 Hamburg", "Burger"]);
            db.run(insert, ["Bucks Burgers", 2, 2, 3, "Kurze Mühren 13, 20095 Hamburg", "Burger"]);
            db.run(insert, ["Mr. Cherng", 2, 3, 3, "Speersort 1, 20095 Hamburg", "Asiatisch"]);
            db.run(insert, ["Franco Rathauspassage", 2, 2, 3, "Rathausmarkt 7, 20095 Hamburg", "Pizza / Pasta"]);
        });
    }
});