import mongoose from "mongoose";

//users db models

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    unique: true,
    require: true,
  },
  role: {
    type: String,
  },
  cart: {
    type: Array,
  },
  otp: {
    type: Object,
  },
  accessToken: {
    type: String,
    unique: true,
    require: true,
  },
  refreshToken: {
    type: String,
    unique: true,
    require: true,
  },
});

export default mongoose.models.Users || mongoose.model("Users", userSchema);
