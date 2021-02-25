import express from "express";
import Joi from "joi";

import data from "./src/api/service.js";

const app = express();

app.use(express.json());

const genres = data.genres;

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.get("/api/genres/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with given ID was not found.");

  res.status(200).send(genre);
});

app.post("/api/genres", (req, res) => {
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };

  const schema = Joi.object({
    id: Joi.required(),
    name: Joi.string().required(),
  });
  const { error } = schema.validate(genre);
  if (error) return res.send(error);

  genres.push(genre);

  res.send(genre);
});

app.put("/api/genres/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with given ID was not found.");

  const schema = Joi.object({
    id: Joi.required(),
    name: Joi.string().required(),
  });
  genre["id"] = parseInt(req.params.id);
  const { error } = schema.validate(genre);
  if (error) return res.send(error);

  genre.name = req.body.name;
  res.send(genre);
});

app.delete("/api/genres/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with given ID was not found.");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
