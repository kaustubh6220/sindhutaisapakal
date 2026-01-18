import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendDonationSuccessEmail({
  to,
  name,
  amount,
  orderId,
}: {
  to: string;
  name: string;
  amount: number;
  orderId: string;
}) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: "Thank you for your donation ❤️",
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>Dear ${name},</h2>
        <p>Thank you for your generous donation.</p>

        <p><strong>Donation Details</strong></p>
        <ul>
          <li>Amount: ₹${amount}</li>
          <li>Order ID: ${orderId}</li>
        </ul>

        <p>
          Your contribution helps us provide food, shelter,
          and education to children in need.
        </p>

        <p>
          This donation is eligible for <strong>80G tax exemption</strong>.
          The receipt will be shared shortly.
        </p>

        <br />
        <p>Warm regards,<br/>
        <strong>Saptasindhu Mahila Sanstha</strong></p>
      </div>
    `,
  });
}
