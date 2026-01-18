import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/database/connection";
import ContactUs from "@/lib/database/model/contactUs.model";
import { sendContactConfirmationEmail } from "@/lib/mail/contactUs";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    await connect();

    const body = await request.json();
    const { fullName, number, email, state, opinion } = body;

    if (!fullName || !number || !email || !state) {
      return NextResponse.json(
        { message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const contact = await ContactUs.create({
      fullName,
      number,
      email,
      state,
      opinion,
    });

    // ✅ SEND CONFIRMATION EMAIL
    await sendContactConfirmationEmail({
      to: email,
      name: fullName,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "This email is already registered" },
        { status: 409 }
      );
    }

    console.error("Contact API Error:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
