const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

// Middle ware
app.use(bodyParser.json());

app.get("*", (req, res) => {
    res.send("hello")
})

// Set Port 
const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});


