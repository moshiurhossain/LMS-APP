const express = require("express");
const { loginController, signupController, verifyOtpController } = require("../../controllers/authControllers");
const router = express.Router();
// http://localhost:8080/api/v1/auth/login
router.post("/login", loginController);
// http://localhost:8080/api/v1/auth/signup
router.post('/signup',signupController)
// http://localhost:8080/api/v1/auth/verifyotp
router.post('/verifyotp', verifyOtpController) 

module.exports = router;