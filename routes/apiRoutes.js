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
    fs.writeFile('./db/db.json', JSON.stringify(dbFile, null, 2), (err) => {
        if (err) {
            console.log(err)
        }
        console.log("route file");
        return res.json(dbFile);
    })
});

apiRoutes.delete('/notes/:id', (req, res) => {
    console.log("req.params.id =", req.params.id);
    console.log("before dbFIle= ", dbFile);
    for(let i=0; i < dbFile.length; i++) {
        if (dbFile[i].id == req.params.id) {
            dbFile.splice(i, 1); 
        }
    }
    console.log("after dbFile: ", dbFile);
    fs.writeFile('./db/db.json', JSON.stringify(dbFile, null, 2), (err) => {
        if (err) {
            console.log(err)
        }
        console.log("route file to front end");
        return res.json(dbFile);
    })
})

module.exports = apiRoutes