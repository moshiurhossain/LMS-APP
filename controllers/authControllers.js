const apiResponse  = require('../helpers/apiResponse')
const asyncHandler = require('../helpers/asyncHandler')

const loginController = asyncHandler(async (req,res)=>{
    apiResponse(res, 200, "Login successful", null)
} )
module.exports = {loginController}