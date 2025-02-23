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
    type: Number,
  },
  like: {
    type: Number,
  },
  users: {
    type: Number,
  },
  price: {
    type: Number,
    require: true,
  },
  discount: {
    type: Number,
  },
});

export default mongoose.models.Courses ||
  mongoose.model("Courses", Coursesschema);
