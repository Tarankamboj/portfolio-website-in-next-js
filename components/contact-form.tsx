"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      
      if (!res.ok) throw new Error(data?.error || "Failed to send")
      toast({ title: "Message sent", description: "We’ll get back to you soon." })
      setForm({ name: "", email: "", phone: "", message: "" })
    } catch (err: any) {
      toast({
        title: "Something went wrong",
        description: err.message || "Please try again.",
        variant: "destructive" as any,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-1">
        <label className="text-sm font-medium">Name</label>
        <Input
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-1">
          <label className="text-sm font-medium">Email</label>
          <Input
            required
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium">Phone</label>
          <Input
            placeholder="+1 555 012 3456"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
        </div>
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-medium">How can we help?</label>
        <Textarea
          required
          placeholder="Tell us about your project, goals, timelines…"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          rows={5}
        />
      </div>
      <Button type="submit" disabled={loading} className="bg-primary text-primary-foreground hover:opacity-90">
        {loading ? "Sending…" : "Send Message"}
      </Button>
    </form>
  )
}
