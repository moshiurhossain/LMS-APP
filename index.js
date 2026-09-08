require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connecting Routes
app.use('/', require('./router'))



// listening to the server
app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in running the server", err);
    }else {
        console.log(`Server is running on port: ${PORT}`);
    }
})