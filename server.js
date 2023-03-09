const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");


// config dotenv
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.get("/", (req, res) => {
    res.status(200).send({ message: "server running" });
});

// listen port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_MODE} Mode on http://localhost:${port}`.bgCyan.white);
})
