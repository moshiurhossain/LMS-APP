const express = require("express");
const { loginController, signupController, verifyOtpController,getAllUsersController, resendOtpController } = require("../../controllers/authControllers");
const authorizemiddleware = require("../../middlewares/authorize");
const router = express.Router();
// http://localhost:8080/api/v1/auth/login
router.post("/login", loginController);
// http://localhost:8080/api/v1/auth/signup
router.post('/signup',signupController)
// http://localhost:8080/api/v1/auth/verifyotp
router.post('/verifyotp', verifyOtpController) 
// http://localhost:8080/api/v1/auth/getallusers
router.get('/getallusers',authorizemiddleware ,getAllUsersController)
// http://localhost:8080/api/v1/auth/resendotp
router.post('/resendotp', resendOtpController)
module.exports = router;