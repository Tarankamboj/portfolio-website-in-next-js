

import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email,phone , message } = await req.json()

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

    console.log(phone)
    // Send mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender
      to: 'deep.taran9646@gmail.com', // your receiving email
      subject: "Sellora Tech",
      text: message,
      html: `<pre>${message} </pre>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}

