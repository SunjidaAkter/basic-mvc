const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const toursRoute = require("./routes/v1/tours.route")
const tourRoute = require("./routes/v1/tour.route")


// middlewares
app.use(express.json());
app.use(cors());


//checking routes
app.get("/", (req, res) => {
    res.send("working properly!");
})

app.use("/tours", toursRoute)
app.use("/tour", tourRoute)

module.exports = app;
