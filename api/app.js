const express = require("express");
const cors = require('cors');
var app = express();

app.use(cors({
    origin: '*'
}));

app.get("/api/test", (req, res, next) => {
    console.log("/api/test requested");
    res.json([{ id: 1, name: "Cat" }, { id: 2, name: "Al" }, { id: 3, name: "Cody" }]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});