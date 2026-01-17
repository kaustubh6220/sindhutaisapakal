export const runtime = "nodejs";

import { connect } from "@/lib/database/connection";
import { NextResponse } from "next/server";
import Donation from "@/lib/database/model/donations.model";


export async function POST(req: Request) {
  try {
    await connect();
    const body = await req.json();

    const { amount, type, name, email, mobile, pan } = body;

    if (!amount || Number(amount) < 100) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    const auth = Buffer.from(
      `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`
    ).toString("base64");

    const razorpayRes = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Number(amount) * 100,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      }),
    });

    const order = await razorpayRes.json();

    if (!razorpayRes.ok) {
      console.error("Razorpay error:", order);
      return NextResponse.json(
        { error: "Razorpay order creation failed" },
        { status: 500 }
      );
    }

    await Donation.create({
      razorpayOrderId: order.id,
      amount: Number(amount),
      type,
      name,
      email,
      mobile,
      pan,
      status: "CREATED",
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });

  } catch (err) {
    console.error("Create order failed:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
