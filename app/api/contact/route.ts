// import { Resend } from "resend"

// export async function POST(req: Request) {
//   try {
//     const { name, email, phone, message } = await req.json()
//     if (!name || !email || !message) {
//       return Response.json({ error: "Missing required fields" }, { status: 400 })
//     }

//     const apiKey = process.env.RESEND_API_KEY
//     if (!apiKey) {
//       return Response.json({ error: "Email service not configured" }, { status: 500 })
//     }

//     const resend = new Resend(apiKey)

//     await resend.emails.send({
//       from: "BrightStack IT <noreply@brightstack.dev>",
//       // TODO: replace with your real recipient address
//       to: ["hello@brightstack.dev"],
//       subject: `New inquiry from ${name}`,
//       reply_to: email,
//       text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "n/a"}`, "", `Message:`, message].join("\n"),
//     })

//     return Response.json({ ok: true })
//   } catch (err: any) {
//     return Response.json({ error: err?.message || "Unable to send email" }, { status: 500 })
//   }
// }

import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender
      to: 'deep.taran9646@gmail.com', // your receiving email
      subject: "Free Website Audit Request",
      text: message,
      html: `<pre>${message}</pre>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}

