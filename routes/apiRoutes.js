const apiRoutes = requires('express').Router();
const db = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

apiRoutes.get("/notes", (req, res) => {

});

apiRoutes.post('/notes', (req, res) => {

});

apiRoutes.delete("/notes", (req, res) => {

});