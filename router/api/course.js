const express = require('express')
const { createCourseController, getCourseController, getAllCourseController, editCourseController, deleteCourseController } = require('../../controllers/courseControllers')
const router =express.Router()

// http://localhost:8080/api/v1/course/createcourse
router.post('/createcourse', createCourseController)
// http://localhost:8080/api/v1/course/getcourse
router.get('/getcourse',getCourseController)
// http://localhost:8080/api/v1/course/getallcourse
router.get('/getallcourse',getAllCourseController)
// http://localhost:8080/api/v1/course/editcourse
router.patch('/editcourse',editCourseController)
// http://localhost:8080/api/v1/course/deletecourse
router.delete('/deletecourse',deleteCourseController)

module.exports = router