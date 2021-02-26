import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.error("Could not connect to MongoDb...", error));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Node",
    author: "Chris",
    tags: ["node", "js"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

createCourse();
