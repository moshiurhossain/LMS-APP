const express = require("express");
const { loginController, signupController, verifyOtpController,getAllUsersController, resendOtpController, forgotPasswordController, resetPasswordController } = require("../../controllers/authControllers");
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
// http://localhost:8080/api/v1/auth/forgotpassword
router.post('/forgotpassword', forgotPasswordController)
// http://localhost:8080/api/v1/auth/resetpassword
router.post('/resetpassword', resetPasswordController)
module.exports = router;