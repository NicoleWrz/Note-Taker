const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3002;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/api/notes', (req, res) => {
  res.json(`${req.method} request received to get notes`);
  //display on left 
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    res.json(`${req.method} request received to save notes`);

    //saving note
    //fs file to db.json
    //parse db.json,push and put back into string
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);