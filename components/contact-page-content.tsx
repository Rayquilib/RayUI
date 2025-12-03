"use client";

import { siteConfig } from "@/config";
import { motion } from "motion/react";
import { IconMail, IconBrandGithub, IconBrandTwitter, IconMapPin } from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-6">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={item} className="space-y-6">
            <div className="rounded-2xl border border-border/50 bg-background/50 p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-[150px] resize-y"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full rounded-full py-6 text-base">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item} className="space-y-6">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border/50 bg-background/50 p-8 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <IconMail className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      Reach out to us via email
                    </p>
                    <a href="mailto:contact@rayui.so" className="text-sm text-primary hover:underline">
                      contact@rayui.so
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border/50 bg-background/50 p-8 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <IconMapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Rayyan Quantum AI Labs
                    </p>
                    <a href={siteConfig.links.website} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                      Visit our website
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border/50 bg-background/50 p-8 backdrop-blur-sm">
                <h3 className="font-semibold mb-4">Follow us</h3>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <IconBrandGithub className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted hover:bg-blue-500 hover:text-white transition-all"
                  >
                    <IconBrandTwitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
