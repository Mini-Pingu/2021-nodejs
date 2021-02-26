function searchCourse(courses, id) {
  const _course = courses.find((c) => c.id === parseInt(id));
  if (_course) return _course;
  return undefined;
}

export default searchCourse;
