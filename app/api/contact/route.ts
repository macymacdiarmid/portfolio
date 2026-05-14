import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: ["macygmacdiarmid@gmail.com"],
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 560px; color: #1A1A1A;">
        <p style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #6B6860; margin: 0 0 24px;">
          Portfolio Contact Form
        </p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; font-size: 12px; color: #6B6860; width: 80px;">Name</td>
            <td style="padding: 8px 0; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 12px; color: #6B6860;">Email</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #1A1A1A;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 12px; color: #6B6860;">Subject</td>
            <td style="padding: 8px 0; font-size: 14px;">${subject}</td>
          </tr>
        </table>
        <div style="border-top: 1px solid #E0DDD8; padding-top: 20px;">
          <p style="font-size: 12px; color: #6B6860; margin: 0 0 10px;">Message</p>
          <p style="font-size: 14px; line-height: 1.7; white-space: pre-wrap; margin: 0;">${message}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
