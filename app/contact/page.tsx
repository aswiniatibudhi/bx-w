"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "talent@brightaxis.ai",
    href: "mailto:talent@brightaxis.ai",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(650) 305-1682",
    href: "tel:+16503051682",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", company: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-primary">Contact</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Let&apos;s Build Your AI Future
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Ready to transform your business with AI? Get in touch with our team to discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="mt-8 rounded-2xl bg-primary/10 p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">Message Sent!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. We&apos;ll be in touch soon.
                    </p>
                    <Button
                      className="mt-6"
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Smith"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Acme Inc."
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({ ...formState, company: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Description
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your AI project or challenge..."
                        rows={5}
                        required
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div>
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="mt-2 text-muted-foreground">
                  Have questions? Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="mt-1 text-muted-foreground">{item.value}</div>
                    </div>
                  </a>
                ))}

                <div
                  id="locations"
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold">HeadQuarter</div>
                        <div className="mt-1 text-muted-foreground">San Francisco</div>
                      </div>
                      <div>
                        <div className="font-semibold">Branch offices</div>
                        <ul className="mt-2 space-y-1 text-muted-foreground">
                          <li>Bangalore</li>
                          <li>Bhubaneswar</li>
                          <li>Canada</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold">Office Hours</h3>
                <p className="mt-2 text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                </p>
                <p className="mt-1 text-muted-foreground">
                  We typically respond within 24 business hours.
                </p>
              </div>

              <div className="rounded-2xl bg-primary/10 p-6">
                <h3 className="font-semibold">Ready for a deeper conversation?</h3>
                <p className="mt-2 text-muted-foreground">
                  Schedule a 30-minute strategy call with our AI experts to discuss your specific needs.
                </p>
                <Button className="mt-4" variant="default">
                  Book a Strategy Call
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
