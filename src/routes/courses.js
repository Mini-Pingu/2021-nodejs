import express from "express";

import data from "../api/courseService.js";

import search from "../utils/search.js";
import validate from "../utils/validate.js";

const router = express.Router();
const courses = data.courses;

router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = search(courses, req.params.id);
  if (!course)
    return res.status(404).send("The course with given ID was not found.");
  res.send(course);
});

router.post("/", (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  const course = search(courses, req.params.id);
  if (!course)
    return res.status(404).send("The course with given ID was not found.");

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = search(courses, req.params.id);
  if (!course)
    return res.status(404).send("The course with given ID was not found.");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

export default router;
