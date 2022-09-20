const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection
mongoose.connect(process.env.LOCAL_DATABASE, { useNewUrlParser: true }).then(() => {
    console.log(`Database connection is working properly`.red.bold);
    console.log(`my owner wanted to see blue color`.blue.bold);
})


// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`server is running on the port ${port}`.yellow.bold);
})
