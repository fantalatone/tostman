const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// INDEX GET
app.get("/", (req, res) => {
    res.send({res: "OK", data: "Sent!", testing_data: "data"});
});

// INDEX GET
app.post("/", (req, res) => {
    res.sendStatus(200);
    console.log(req.body);
});

app.listen(3000, () => {
  console.log("API Runnin on http://localhost:3000");
});
