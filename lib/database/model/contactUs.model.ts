import mongoose, { Schema, model, models } from "mongoose";

const ContactUsSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide name"],
      trim: true,
    },
    number: {
      type: String,
      required: [true, "Please provide mobile number"],
      match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"],
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      lowercase: true,
      unique: true, // ⭐ UNIQUE
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    state: {
      type: String,
      required: [true, "Please provide state"],
    },
    opinion: {
      type: String,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite error
const ContactUs =
  models.ContactUs || model("ContactUs", ContactUsSchema);

export default ContactUs;
