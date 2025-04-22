"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActors = void 0;
const dbconfig_1 = require("../config/dbconfig");
const getActors = (req, res) => {
    dbconfig_1.db.query('Select * from actors', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to fetch Actors" });
        }
        else {
            res.json(results);
        }
    });
};
exports.getActors = getActors;
