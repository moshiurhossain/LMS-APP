const express = require("express");
const router = express.Router();
// http://localhost:8080/api/v1/auth
router.use("/auth", require("./auth"));
// http://localhost:8080/api/v1/course
router.use("/course",require('./course'))

module.exports = router;