

import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email,phone , message } = await req.json()

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
            port: 587,
            secure: Number(587) === 465,
            auth: {
                user: "98fb7b001@smtp-brevo.com",
                pass: "q3AIdSVyjL5UEPpZ",
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

