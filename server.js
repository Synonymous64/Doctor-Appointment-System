const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


// config dotenv
dotenv.config();

// mongoDB connection
connectDB();

// rest object
const app = express();


// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/user', require("./routes/userRoutes.js"));

// listen port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_MODE} Mode on http://localhost:${port}`.bgCyan.white);
})
