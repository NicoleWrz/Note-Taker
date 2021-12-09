const apiRoutes = require('express').Router();
const path = require("path");
let dbFile = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

apiRoutes.get("/notes", (req, res) => {
    return res.json(dbFile);
});

apiRoutes.post('/notes', (req, res) => {
    const note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    dbFile.push(note);
    fs.writeFile('./db/db.json', JSON.stringify(dbFile), (err) => {
        if (err) {
            console.log(err)
        }
        console.log("route file");
        return res.json(dbFile);
    })
});

module.exports = apiRoutes