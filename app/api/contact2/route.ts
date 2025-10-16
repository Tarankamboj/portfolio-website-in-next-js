import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, message } = await req.json()

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            )
        }

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

        // Format email content
        const emailText = `
📩 Sellora Tech  || Contact email

👤 Name: ${name}
✉️ Email: ${email}
📞 Phone: ${phone || "Not provided"}

💬 Message:${message}

-------------------------
Sent automatically from your website contact form.
`.trim()

        const emailHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
.header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
.field { margin-bottom: 10px; }
.label { font-weight: bold; color: #666; }
.message { background: #f8f9fa; padding: 15px; border-radius: 6px; white-space: pre-wrap; }
</style>
</head>
<body>
<div class="header">
<h2>📩 New Contact Form Submission - Sellora Tech</h2>
</div>

<div class="field">
<span class="label">👤 Name:</span> ${name}
</div>
<div class="field">
<span class="label">✉️ Email:</span> ${email}
</div>
<div class="field">
<span class="label">📞 Phone:</span> ${phone || "Not provided"}
</div>

<div class="field">
<span class="label">💬 Message:</span>
<div class="message">${message}</div>
</div>

<hr>
<p><em>Sent automatically from your website contact form.</em></p>
</body>
</html>
`

        // Send mail
        await transporter.sendMail({
            from: `"${name}" rohan.techies@gmail.com`,
            to: 'deep.taran9646@gmail.com', // your receiving email
            subject: `Sellora Tech New Contact Form Submission from ${name}`,
            text: emailText,
            html: emailHtml,
        })
 
        return NextResponse.json({
            success: true,
            message: "Email sent successfully"
        })

    } catch (err) {
        console.error("Email sending error:", err)
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        )
    }

}


