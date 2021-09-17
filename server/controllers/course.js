const courseModel = require('../models/course');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.find({});
    console.log(courses);
    res.status(200).json({
      status: 'success',
      results: courses.length,
      data: {
        courses,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const body = req.body;
    const name = body.name;
    const courses = await courseModel.create(body);
    const course = await courseModel.findOne({ name });
    res.status(201).json({
      status: 'success',
      results: courses.length,
      data: {
        course,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
