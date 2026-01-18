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

export async function sendContactConfirmationEmail({
  to,
  name,
}: {
  to: string;
  name: string;
}) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: "Thank you for contacting us",
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>Dear ${name},</h2>

        <p>
          Thank you for reaching out to <strong>Saptasindhu Mahila Sanstha</strong>.
        </p>

        <p>
          We have received your message and our team will get back to you shortly.
        </p>

        <p>
          We truly appreciate your interest and support.
        </p>

        <br />
        <p>
          Warm regards,<br/>
          <strong>Saptasindhu Mahila Sanstha</strong>
        </p>
      </div>
    `,
  });
}



export async function sendAdminContactNotification({
  name,
  email,
  number,
  state,
  opinion,
}: any) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: "admin@saptasindhu.org", // change this
    subject: "New Contact Form Submission",
    html: `
      <h3>New Contact Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${number}</p>
      <p><strong>State:</strong> ${state}</p>
      <p><strong>Message:</strong> ${opinion || "-"}</p>
    `,
  });
}
