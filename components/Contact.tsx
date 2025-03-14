"use client"

import { motion } from "framer-motion"
import EmailShowcase from "./email"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-textGreen text-sm tracking-wide">03. What&apos;s Next?</h2>
        <h2 className="text-4xl font-semibold mt-2">Get In Touch</h2>
        <p className="max-w-[600px] text-center text-textDark mt-4">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll do my
          best to get back to you!
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-6">
          <EmailShowcase variant="card" className="w-full md:w-auto" />

          
        </div>
      </motion.div>
    </section>
  )
}

