

const express = require('express');
const app = express();


app.get("/", async (req, res) => {
    res.send("Página inicial");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080: http://localhost:8080.");
});