const apiResponse = require('./apiResponse')

const globalErrorHandler = (err,req,res,next)=>{

    // if err name starts with ValidationError
if(err.name === "ValidationError"){
        // create empty object named error
        const errors ={}
        // from errors object inside err get keys using Object.keys() methen then run foreach loop
        Object.keys(err.errors).forEach((key)=>{
            // exrtact error messages from err.errors for specific error 
            errors[key] = err.errors[key].message;
        })

        Object.values(errors).forEach((value)=>{
            apiResponse(res, 400, "Validation error", value.message)
        })

    }else{
        apiResponse(res, err.statusCode || 500, err.message || "Internal server error", null )
    }
}
module.exports = globalErrorHandler