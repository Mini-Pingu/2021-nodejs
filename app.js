import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hihi");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/courses/:year/:month", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listen on port ${port}...`);
});
