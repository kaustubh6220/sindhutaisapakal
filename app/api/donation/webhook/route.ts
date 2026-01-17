export const runtime = "nodejs";


import crypto from "crypto";
import { NextResponse } from "next/server";
import Donation from "@/lib/database/model/donations.model";
import { connect } from "@/lib/database/connection";

export async function POST(req: Request) {
  await connect();

  const rawBody = await req.text();
  const signature = req.headers.get("x-razorpay-signature")!;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(rawBody)
    .digest("hex");

  if (signature !== expectedSignature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(rawBody);
  const payment = event.payload.payment?.entity;
  const orderId = payment?.order_id;

  switch (event.event) {
    case "payment.captured":
      await Donation.findOneAndUpdate(
        { razorpayOrderId: orderId },
        {
          status: "SUCCESS",
          razorpayPaymentId: payment.id,
          webhookEvent: event.event,
        }
      );
      break;

    case "payment.failed":
      await Donation.findOneAndUpdate(
        { razorpayOrderId: orderId },
        {
          status: "FAILED",
          failureReason: payment.error_description,
          webhookEvent: event.event,
        }
      );
      break;
  }

  return NextResponse.json({ received: true });
}
