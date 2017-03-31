const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});


const swords = require("./routes/swords");

app.use("/api/swords", swords);

app.listen(process.env.PORT || 8080);
console.log("Woot, server started");
