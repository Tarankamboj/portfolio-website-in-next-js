import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()
    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return Response.json({ error: "Email service not configured" }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: "BrightStack IT <noreply@brightstack.dev>",
      // TODO: replace with your real recipient address
      to: ["hello@brightstack.dev"],
      subject: `New inquiry from ${name}`,
      reply_to: email,
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "n/a"}`, "", `Message:`, message].join("\n"),
    })

    return Response.json({ ok: true })
  } catch (err: any) {
    return Response.json({ error: err?.message || "Unable to send email" }, { status: 500 })
  }
}
