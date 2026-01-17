import mongoose, { Schema, models } from "mongoose";

const DonationSchema = new Schema(
  {
    razorpayOrderId: { type: String, required: true, index: true },
    razorpayPaymentId: String,
    razorpaySignature: String,

    amount: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    type: { type: String, enum: ["one-time", "monthly"], required: true },

    name: String,
    email: String,
    mobile: String,
    pan: String,
    country: String,
    state: String,
    city: String,
    pin_code: String,
    address: String,
    message: String,


    status: {
      type: String,
      enum: ["CREATED", "SUCCESS", "FAILED"],
      default: "CREATED",
    },

    webhookEvent: String,
    failureReason: String,
  },
  { timestamps: true }
);

export default models.Donation ||
  mongoose.model("Donation", DonationSchema);
