const apiResponse = require("../helpers/apiResponse");
const asyncHandler = require("../helpers/asyncHandler");

// create course conroller
const createCourseController = asyncHandler(async(req,res)=>{
    apiResponse(res,200,'Course created successfully')
})
// get course controller
const getCourseController = asyncHandler(async(req,res)=>{
    apiResponse(res,200,'Course fetched successfully')
})
// get all course controller
const getAllCourseController =asyncHandler(async(req,res)=>{
    apiResponse(res,200,'All courses fetched successfully')
})
// edit course controller
const editCourseController = asyncHandler(async(req,res)=>{
    apiResponse(res,200,'Courses edited successfully')
})
// delete course controller 
const deleteCourseController = asyncHandler(async(req,res)=>{
    apiResponse(res,200,'Courses deleted successfully')
})

module.exports ={
    createCourseController,
    getCourseController,
    getAllCourseController,
    editCourseController,
    deleteCourseController,

}