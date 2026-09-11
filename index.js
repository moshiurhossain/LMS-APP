require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const globalErrorHandler = require("./helpers/globalErrorHandler")
const dbConfig = require('./db/bdConfig')
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// BD Connection
dbConfig()
// Connecting Routes
app.use('/', require('./router'))





// Global Error Handler
app.use(globalErrorHandler)
// listening to the server
app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in running the server", err);
    }else {
        console.log(`Server is running on port: ${PORT}`);
    }
})