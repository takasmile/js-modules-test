const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2'},
  { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) { // 404
    res.status(404).send('The course with the given id is not exist.');
  }
  res.send(course);
});

app.get('/api/courses/:year/:month', (req, res) => {
  res.send(req.params);
  res.send(req.query);
})

app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body); // result.error
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  // Look up the course
  // If not exsiting, return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) { // 404
    return res.status(404).send('The course with the given id is not exist.');
  }

  // Validate
  // If invalid, return 400 - Bad request
  const { error } = validateCourse(req.body); // result.error
  if (error) return res.status(400).send(error.details[0].message);

  // Update course
  course.name = req.body.name;

  // Return the updated course
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  // Look up the course
  // Not existing, return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) { // 404
    res.status(404).send('The course with the given id is not exist.');
  }

  // Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  // Return the same course
  res.send(coures);
})

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})

function validateCourse (course) {
  const schema = {
    name: Joi.string().min(3).required()
  };
  return Joi.validate(course, schema);
}