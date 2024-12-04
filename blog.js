const express = require("express");
const app = express();
const port = 3000;
const postRouters = require("./routers/routers");

app.get("/", (req, res) => {
    res.json("Hello server");
})

app.use("/posts", postRouters);

app.listen(port, () => {
    console.log("Server avviato");
})