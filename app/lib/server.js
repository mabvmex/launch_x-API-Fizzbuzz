const ExplorerController = require("./controllers/ExplorerControllers");
const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "=== FizzBuzz API welcome! ==="
    });
});

app.listen(port, () => {
    console.log(`=== FizzBuzz API in localhost:${port} ===`);
});

