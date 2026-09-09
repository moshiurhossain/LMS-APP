const apiResponse  = require('../helpers/apiResponse')
const asyncHandler = require('../helpers/asyncHandler')
const otpTemplate = require('../helpers/otpTemplete')
const sendEmail = require('../helpers/sendEmail')
const {generateOtp,otpExpiryTime} = require('../helpers/allGenerators')

const loginController = asyncHandler(async (req,res)=>{

    sendEmail('pantho883@gmail.com','Test Email',otpTemplate('mad moshi', generateOtp(),otpExpiryTime()))
    apiResponse(res, 200, "Login successful", null)
} )
module.exports = {loginController}