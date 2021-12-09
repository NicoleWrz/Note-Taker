const apiRoutes = require('express').Router();
const path = require("path");
let db = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

apiRoutes.get("/notes", (req, res) => {
    res.json(db);
});

apiRoutes.post('/notes', (req, res) => {
    const note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    db.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db));
    res.send(`${req.method} Note added`);
});

module.exports = apiRoutes