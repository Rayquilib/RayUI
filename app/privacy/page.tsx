"use client";

import type { Metadata } from "next";
import { motion } from "motion/react";
import { IconShield, IconLock, IconEye, IconDatabase, IconMail } from "@tabler/icons-react";

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

export default function PrivacyPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-20 px-6">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconShield className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Key Points */}
        <motion.div variants={item} className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: IconLock,
              title: "Secure",
              description: "Your data is encrypted and stored securely"
            },
            {
              icon: IconEye,
              title: "Transparent",
              description: "We're clear about what we collect and why"
            },
            {
              icon: IconDatabase,
              title: "Minimal",
              description: "We only collect what's necessary"
            }
          ].map((point) => (
            <div key={point.title} className="rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm text-center space-y-3">
              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <point.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-bold">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">1. Introduction</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                RayUI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our UI component library.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using RayUI, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">2. Information We Collect</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">2.1 Usage Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect information about how you access and use RayUI, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Pages visited and time spent on pages</li>
                  <li>Components viewed and downloaded</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>IP address (anonymized)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">2.2 Contact Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you contact us through our contact form, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Message content</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">2.3 Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use analytics tools to understand how users interact with RayUI. This helps us improve our components and documentation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">3. How We Use Your Information</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>To provide and maintain our service</li>
                <li>To improve and optimize RayUI components</li>
                <li>To understand how users interact with our library</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To send you updates about new components (only if you opt-in)</li>
                <li>To detect and prevent technical issues</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">4. Data Sharing and Disclosure</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong className="text-foreground">Service Providers:</strong> We may share data with trusted third-party services that help us operate our website (e.g., analytics providers)</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights</li>
                <li><strong className="text-foreground">Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">5. Data Security</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We use industry-standard encryption and security protocols to safeguard your data.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">6. Your Rights</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal information</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="/contact" className="text-primary hover:underline">our contact page</a>.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">7. Cookies</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">8. Children's Privacy</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                RayUI is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">9. Changes to This Policy</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">10. Contact Us</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="flex items-center gap-3 text-muted-foreground">
                <IconMail className="h-5 w-5 text-primary" />
                <a href="/contact" className="text-primary hover:underline">Contact Form</a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
