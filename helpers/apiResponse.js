const apiResponse = (res, statusCode, message, data) => {
    return res
        .status(statusCode)
        .json({
            // if status code is 400 or above then success will be false otherwise true
            success: statusCode >= 400 ? false : true,
          message,
          data:null || data,
    })
}

module.exports = apiResponse