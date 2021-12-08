const apiRoutes = requires('express').Router();
const db = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

apiRoutes.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

apiRoutes.post('/notes', (req, res) => {
    console.log(req.body);
    res.json(`${req.method} request received to save notes`)
});

apiRoutes.delete("/notes", (req, res) => {

});