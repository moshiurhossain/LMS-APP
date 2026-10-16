const express = require('express')
const { createCourseController, getCourseController, getAllCourseController, editCourseController, deleteCourseController, getSubscribedCoursesController, getCourseByCreatorController, testcourseController } = require('../../controllers/courseControllers')
const authorizemiddleware = require('../../middlewares/authorizeMiddleware')
const router =express.Router()

// http://localhost:8080/api/v1/course/createcourse
router.post('/createcourse',authorizemiddleware, createCourseController)
// http://localhost:8080/api/v1/course/getcourse
router.get('/getcourse',authorizemiddleware,getCourseController)
// http://localhost:8080/api/v1/course/getallcourse
router.get('/getallcourse',getAllCourseController)
// http://localhost:8080/api/v1/course/editcourse
router.put('/editcourse/:courseId',authorizemiddleware,editCourseController)
// http://localhost:8080/api/v1/course/deletecourse
router.delete('/deletecourse/:courseId',authorizemiddleware,deleteCourseController)
// http://localhost:8080/api/v1/course/getsubscribedcourses
router.get('/getsubscribedcourses', authorizemiddleware, getSubscribedCoursesController)
// http://localhost:8080/api/v1/course/getcoursebycreator
router.get('/getcoursebycreator', authorizemiddleware, getCourseByCreatorController)
// http://localhost:8080/api/v1/course/testcourseapi
router.post('/testcourseapi',authorizemiddleware,testcourseController)

module.exports = router