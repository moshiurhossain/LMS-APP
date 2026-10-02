const express = require("express");
const { createClassController, getCourseClassesController, deleteClassController, updateClassController } = require("../../controllers/classControllers");
const router = express.Router();
// http://localhost:8080/api/v1/class/createclass
router.post('/createclass',createClassController)
// http://localhost:8080/api/v1/class/getcourseclasses
router.get('/getcourseclasses',getCourseClassesController)
// http://localhost:8080/api/v1/class/deleteclass
router.delete('/deleteclass',deleteClassController)
// http://localhost:8080/api/v1/class/updateclass
router.patch('/updateclass',updateClassController)
module.exports = router;