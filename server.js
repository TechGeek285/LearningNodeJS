const express = require('express');

const app = express();

const port = 4000;

app.get("/", (req, res) => {

    return res.status(200).send("Hello World");

});

app.listen(port, () => {

    console.log("Listening on ${port}.");

});