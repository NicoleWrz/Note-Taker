const apiRoutes = requires('express').Router();
let dbNote = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

apiRoutes.get("/notes", (req, res) => {
    return res.json(dbNote);
});

apiRoutes.post('/notes', (req, res) => {
    const note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    db.push(note);
    fs.writeFile('../db/db.json'), JSON.stringify(dbNote);
    res.send(`${req.method} New note added`);
});

// apiRoutes.delete("/notes", (req, res) => {

// });