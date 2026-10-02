const apiResponse = require("../helpers/apiResponse");
const asyncHandler = require("../helpers/asyncHandler");
const slugGenerator = require("../helpers/slugGenerator");
const courseSchema = require("../models/courseSchema");
const userSchema = require("../models/userSchema");

// create course conroller
const createCourseController = asyncHandler(async(req,res)=>{
    // get the course data from request body
    const {name,description,createdBy} = req.body
    // check if the course already exists
    const existingCourse = await courseSchema.findOne({ name });
    if (existingCourse) {
        return apiResponse(res, 400, 'Course already exists');
    }
    // generate slug and create new course
    const courseslug = slugGenerator(name)
    // create new course
    const newCourse = new courseSchema({
        name,
        description,
        createdBy,
        slug: courseslug,
    });
    // save the new course to the database
    await newCourse.save();
    // update the user's createdCourses array with the new course ID
    const thiscourse = await courseSchema.findOne({ name});
    if (!thiscourse) return apiResponse(res, 400, 'Course not found after creation');
    const updatedUser = await userSchema.findByIdAndUpdate(
        { _id: createdBy },
        { $push: { createdCourses: thiscourse._id } },
        { returnDocument: "after" },
        
    )

    

    // return a success response
    apiResponse(res,200,'Course created successfully',newCourse)
})
// get course controller
const getCourseController = asyncHandler(async(req,res)=>{
    // get the course data from request body
    const {courseId} = req.body
    // find the course by courseId
    const course = await courseSchema.findById(courseId);
    // return a success response with the course
    apiResponse(res,200,'Course fetched successfully', course) 
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
// get course by creator controller
const getCourseByCreatorController = asyncHandler(async(req,res)=>{
     
    // res.user is set by the authorizeMiddleware, which contains the authenticated user's information
    // find all courses created by the creatorId
    const courses = await courseSchema.find({ createdBy: res.user.id });
    // return a success response with the courses
    apiResponse(res,200,'Courses fetched by creator successfully', courses)
})
// get subscribed courses controller
const getSubscribedCoursesController = asyncHandler(async(req,res)=>{
     // res.user is set by the authorizeMiddleware, which contains the authenticated user's information
    // find the user by userId and populate the suscribedCourses field
    const user = await userSchema.findById(res.user.id).populate('suscribedCourses');
    apiResponse(res,200,'Subscribed courses fetched successfully', user.suscribedCourses)
})

module.exports ={
    createCourseController,
    getCourseController,
    getAllCourseController,
    editCourseController,
    deleteCourseController,
    getCourseByCreatorController,
    getSubscribedCoursesController,
}