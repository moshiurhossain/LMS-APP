const express = require('express')
const { createCourseController, getCourseController, getAllCourseController, editCourseController, deleteCourseController, getSubscribedCoursesController, getCourseByCreatorController } = require('../../controllers/courseControllers')
const authorizemiddleware = require('../../middlewares/authorizeMiddleware')
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
// http://localhost:8080/api/v1/course/getsubscribedcourses
router.get('/getsubscribedcourses', authorizemiddleware, getSubscribedCoursesController)
// http://localhost:8080/api/v1/course/getcoursebycreator
router.get('/getcoursebycreator', authorizemiddleware, getCourseByCreatorController)

module.exports = router