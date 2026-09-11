const apiResponse  = require('../helpers/apiResponse')
const asyncHandler = require('../helpers/asyncHandler')
const otpTemplate = require('../helpers/otpTemplete')
const sendEmail = require('../helpers/sendEmail')
const bcrypt = require('bcrypt')
const {generateOtp,otpExpiryTime} = require('../helpers/allGenerators')
const userSchema = require('../models/userSchema')
// login controller
const loginController = asyncHandler(async (req,res)=>{

    
    apiResponse(res, 200, "Login successful", null)
} )

// signup controller
const signupController = asyncHandler(async (req,res)=>{
    // get the user data from request body
    const {name,email,password,phone} = req.body
    // validate the user data
    if(!name || !email || !password || !phone) return apiResponse(res, 400, "All fields are required", null)
    // logic to check if the user already exists
    const existingUser = await userSchema.findOne({email})
    // if the user already exists, return an error response
    if(existingUser) return apiResponse(res, 400, "Email already exists", null)
    // generate otp and expiry time
    const otp = generateOtp()
    // encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10)
    // send the otp to the user's email
    sendEmail(email,'OTP Verification',otpTemplate(name, otp,'10 minutes'))
    // create a new user
    const user = new userSchema({
        name,
        email,
        password: hashedPassword,
        phone,
        otp,
        otp_expiry: otpExpiryTime(),
    })
    // save the user to the database
    await user.save()
    // return a success response
    apiResponse(res, 200, "Signup successful", user)
})

// all exports
module.exports = {loginController, signupController}