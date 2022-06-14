var express = require("express");
var app = express();

app.get("/test", (req, res, next) => {
    res.json(["Cat", "was", "here"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});