var express = require("express");
var app = express();

app.get("/api/test", (req, res, next) => {
    res.json(["Cat", "was", "here"]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});