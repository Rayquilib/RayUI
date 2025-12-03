"use client";

import type { Metadata } from "next";
import { motion } from "motion/react";
import { IconScale, IconCheck, IconAlertTriangle, IconFileText } from "@tabler/icons-react";

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

export default function TermsPage() {
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
              <IconScale className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using RayUI.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Quick Summary */}
        <motion.div variants={item} className="rounded-2xl border border-primary/20 bg-primary/5 p-8 space-y-4">
          <div className="flex items-center gap-3">
            <IconFileText className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold">Quick Summary</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            By using RayUI, you agree to use our components responsibly, respect our custom license terms, and acknowledge that the software is provided "as is" without warranties. You can use RayUI in your projects, but you cannot resell or redistribute the library itself.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">1. Acceptance of Terms</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using RayUI ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use the Service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service apply to all users of the Service, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">2. Use License</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                RayUI components are provided under the <strong className="text-foreground">Rayyan Quantum AI Labs UI License (Custom MIT Variant)</strong>. This license grants you specific rights and imposes certain restrictions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IconCheck className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">What You Can Do:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Use in personal and commercial projects</li>
                      <li>Modify components to suit your needs</li>
                      <li>Use for unlimited client work</li>
                      <li>Remove credits and add your own branding</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <IconAlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">What You Cannot Do:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Resell, redistribute, or sublicense the library</li>
                      <li>Use in website builders or UI generators</li>
                      <li>Create competing UI libraries</li>
                      <li>Claim the components as your own original work</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                For complete license details, please see our <a href="/license" className="text-primary hover:underline">License page</a>.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">3. User Responsibilities</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                When using RayUI, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the Service for any illegal or unauthorized purpose</li>
                <li>Not violate any laws in your jurisdiction</li>
                <li>Not transmit any malicious code or viruses</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Respect the intellectual property rights of others</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">4. Intellectual Property</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Service and its original content (excluding user-generated content), features, and functionality are and will remain the exclusive property of Rayyan Quantum AI Labs and its licensors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Rayyan Quantum AI Labs.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">5. Disclaimer of Warranties</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. RAYUI MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF INTELLECTUAL PROPERTY OR OTHER VIOLATION OF RIGHTS.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We do not warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>The Service will function uninterrupted, secure, or error-free</li>
                <li>Defects will be corrected</li>
                <li>The Service or the server that makes it available are free of viruses or other harmful components</li>
                <li>The use of the Service will meet your requirements or expectations</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">6. Limitation of Liability</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                IN NO EVENT SHALL RAYYAN QUANTUM AI LABS, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">7. Indemnification</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold harmless Rayyan Quantum AI Labs and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Your use and access of the Service</li>
                <li>Your violation of any term of these Terms</li>
                <li>Your violation of any third party right, including without limitation any copyright, property, or privacy right</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">8. Changes to Terms</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">9. Governing Law</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Rayyan Quantum AI Labs operates, without regard to its conflict of law provisions.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">10. Contact Us</h2>
            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us:
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 text-primary hover:underline">
                <IconFileText className="h-5 w-5" />
                Contact Form
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
