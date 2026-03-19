"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { BadgeCheck } from "lucide-react"

export default function CertificationSection() {
  return (
    <section className="mx-auto container px-4 py-14">
      <motion.div
        className="rounded-2xl border border-border bg-card p-6 md:p-10 flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Badge image — 40% width */}
        <div className="w-full md:w-[40%] relative aspect-square">
          <Image
            src="/shopify-cert.png"
            alt="Shopify Solution Planning Fundamentals Certification"
            fill
            className="object-contain rounded-xl"
          />
        </div>

        {/* Text content — 60% width */}
        <div className="w-full md:w-[60%] flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-primary">
            <BadgeCheck className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Shopify Certified Developer</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">
            I&apos;m Taran — Shopify Certified in Solution Planning Fundamentals
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Verified by Shopify Academy, this certification confirms expertise in architecting scalable Shopify solutions — from store structure and app selection to performance and conversion strategy.
          </p>
          <Link
            href="https://www.credly.com/badges/93daeb47-f647-4698-a8a4-16a9ec55d72c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline w-fit mx-auto md:mx-0"
          >
            <BadgeCheck className="w-4 h-4" />
            View Certification on Credly →
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
