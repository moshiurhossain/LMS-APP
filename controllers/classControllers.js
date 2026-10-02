const apiResponse = require("../helpers/apiResponse")
const asyncHandler = require("../helpers/asyncHandler")
const classSchema = require("../models/classSchema")
const slugGenerator = require("../helpers/slugGenerator")
const courseSchema = require("../models/courseSchema")

// create class controller
const createClassController = asyncHandler(async (req, res) => {
    // get the class data from request body
     const  { name,videoUrl, courseId,createdBy } = req.body
    //  const userId = req.user.id
    //  console.log('Request body:', userId, )
    // // send a response with the class data 
     if (!name || !videoUrl || !courseId) return apiResponse(res, 400, "Name, videoUrl and courseId are required", null)
    // // check if the class already exists
     const existingClass = await classSchema.findOne({ name });
    // // if the class already exists, return an error response
     if (existingClass) return apiResponse(res, 400, "Class already exists", null)
    // // check if the courseId is valid
    const existingcourse = await courseSchema.findById(courseId);
    // // return an error response if the courseId is not valid 
    if (!existingcourse) return apiResponse(res, 400, "Course not found", null)
    // // generate slug and create new class 
     const slug = slugGenerator(name)
     const newClass = new classSchema({
      createdBy,
        name,
        slug,
        videoUrl,
        courseId,
    })
    await newClass.save()
    /// update the course with the new class ID
    const updatedCourse = await courseSchema.findByIdAndUpdate(
        {_id: courseId},
        {$push: {classes: newClass._id}},
       { returnDocument: "after" },
    )
  
    apiResponse(res, 200, "Create class controller", {class: newClass, course: updatedCourse})
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
