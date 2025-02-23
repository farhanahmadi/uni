import mongoose from "mongoose";

//Courses db models

const Coursesschema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    require: true,
  },
  img: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  timeLength: {
    type: String,
    require: true,
  },
  status: {
    type: String,
  },
  price: {
    type: String,
    require: true,
  },
  discount: {
    type: String,
  },
});

export default mongoose.models.Courses ||
  mongoose.model("Courses", Coursesschema);
