const express = require('express');
const courseRouter = require('./routes/course');

const app = express();
app.use(express.json());
app.use('/api/v1/courses', courseRouter);

module.exports = app;
