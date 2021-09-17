const express = require('express');
const baseURL = require('./util');
const { getAllCourses, createCourse } = require('../controllers/course');

const router = express.Router();
router.route('/').get(getAllCourses).post(createCourse);

module.exports = router;
