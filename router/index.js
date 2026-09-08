const express = require("express");
const router = express.Router();

// link router to api
// http://localhost:8080/api/v1
router.use(process.env.BASE_URL, require('./api'))


module.exports = router;