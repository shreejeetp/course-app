const mongoose = require('mongoose');

const databaseURL = process.env.DATABASE;
mongoose
  .connect(databaseURL)
  .then((con) => {
    console.log('connected to database successfully📖');
  })
  .catch((err) => {
    console.log('error occurred while connecting to database 💥:', err);
    process.exit(1);
  });

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  coverImage: {
    type: String,
    default: 'coverImage.jpg',
  },
});

const Course = mongoose.model('course', courseSchema);

module.exports = Course;
