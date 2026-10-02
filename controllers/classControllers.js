const apiResponse = require("../helpers/apiResponse")
const asyncHandler = require("../helpers/asyncHandler")

// create class controller
const createClassController = asyncHandler(async (req, res) => {
    // get the class data from request body
    //  const  { name,videoUrl, courseId ,slug} = req.body
    // send a response with the class data 
    apiResponse(res, 200, "Create class controller", null)
})
// get courseClasses controller
const getCourseClassesController = asyncHandler(async (req, res) => {
    // send a response with the class data 
    apiResponse(res, 200, "Get course classes controller", null)
})
// delete class controller
const deleteClassController = asyncHandler(async (req, res) => {
    // send a response with the class data 
    apiResponse(res, 200, "Delete class controller", null)
})
// update class controller
const updateClassController = asyncHandler(async (req, res) => {
    // send a response with the class data 
    apiResponse(res, 200, "Update class controller", null)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////
// export the controllers
module.exports = {
    createClassController,
    getCourseClassesController,
    deleteClassController,
    updateClassController,
}
