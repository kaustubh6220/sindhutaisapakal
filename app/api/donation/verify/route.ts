import crypto from "crypto";
import { NextResponse } from "next/server";
import { connect } from "@/lib/database/connection";
import Donation from "@/lib/database/model/donations.model";

export async function POST(req: Request) {
  await connect();
  const body = await req.json();

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  await Donation.findOneAndUpdate(
    { razorpayOrderId: razorpay_order_id },
    {
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature,
      status: "SUCCESS",
    }
  );

  return NextResponse.json({ success: true });
}
