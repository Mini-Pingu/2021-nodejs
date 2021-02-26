import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Courses", message: "The Courses" });
});

export default router;
