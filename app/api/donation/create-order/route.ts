import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay/razorpay";
import { connect } from "@/lib/database/connection";
import Donation from "@/lib/database/model/donations.model";

export async function POST(req: Request) {
  await connect();
  const body = await req.json();

  const { amount, type, name, email, mobile, pan, country, state, city, pin_code, address, message} = body;

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  });

  await Donation.create({
    razorpayOrderId: order.id,
    amount,
    type,
    name,
    email,
    mobile,
    pan,
    country,
    state,
    city,
    pin_code,
    address,
    message,
    status: "CREATED",
  });

  return NextResponse.json({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
  });
}
