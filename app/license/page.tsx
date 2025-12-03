"use client";

import type { Metadata } from "next";
import { motion } from "motion/react";
import { IconCheck, IconX, IconCopy, IconDownload } from "@tabler/icons-react";
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

const licenseText = `
  Rayyan Quantum AI Labs UI Library
  License: Rayyan Quantum AI Labs UI License (Custom MIT Variant)

  Permitted:
    • Commercial projects
    • Unlimited client work
    • Removing credits and adding your own branding
    • Modifying components as needed

  Not Permitted:
    • Reselling, redistributing, or licensing the library
    • Using the components in website builders or automated UI generators

  For full terms, see the LICENSE file in the project root.
`;

export default function LicensePage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(licenseText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            License
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            RayUI is licensed under a custom MIT variant that gives you maximum flexibility.
          </p>
        </motion.div>

        {/* License Code Block */}
        <motion.div variants={item} className="relative rounded-2xl border border-border/50 bg-zinc-950 dark:bg-zinc-900 p-8 shadow-lg overflow-hidden group">
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
              {copied ? <IconCheck className="h-4 w-4" /> : <IconCopy className="h-4 w-4" />}
            </Button>
          </div>
          <pre className="text-sm font-mono text-zinc-100 overflow-x-auto leading-relaxed">
            <code>{licenseText}</code>
          </pre>
        </motion.div>

        {/* What You Can Do */}
        <motion.div variants={item} className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                <IconCheck className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">What You Can Do</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Use in commercial projects",
                "Build unlimited client projects",
                "Remove credits and add your branding",
                "Modify components as needed",
                "Use in SaaS products",
                "Distribute as part of your product"
              ].map((permission) => (
                <li key={permission} className="flex items-start gap-3">
                  <IconCheck className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{permission}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                <IconX className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">What You Cannot Do</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Resell or redistribute the library",
                "License the components to others",
                "Use in website builders",
                "Use in automated UI generators",
                "Create competing UI libraries",
                "Claim the components as your own work"
              ].map((restriction) => (
                <li key={restriction} className="flex items-start gap-3">
                  <IconX className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{restriction}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Full License Text */}
        <motion.div variants={item} className="space-y-6">
          <h2 className="text-3xl font-bold">Full License Terms</h2>
          <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 space-y-6 leading-relaxed">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Copyright (c) {new Date().getFullYear()} Rayyan Quantum AI Labs</strong>
              </p>
              
              <p className="text-muted-foreground">
                Permission is hereby granted, free of charge, to any person or organization obtaining a copy
                of this software and associated documentation files (the "Software"), to use the Software
                in their projects, including commercial applications, subject to the following conditions:
              </p>

              <div className="space-y-2">
                <p className="text-foreground font-semibold">Permitted Uses:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Use in personal and commercial projects</li>
                  <li>Modification of components to suit your needs</li>
                  <li>Integration into client projects without limitation</li>
                  <li>Removal of attribution and addition of your own branding</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-foreground font-semibold">Restrictions:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>The Software may not be resold, redistributed, or sublicensed as a standalone product</li>
                  <li>The Software may not be used to create competing UI libraries or component collections</li>
                  <li>The Software may not be integrated into website builders, page builders, or automated UI generation tools</li>
                </ul>
              </div>

              <p className="text-muted-foreground">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Questions Section */}
        <motion.div variants={item} className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center space-y-4">
          <h3 className="text-xl font-bold">Have Questions About Licensing?</h3>
          <p className="text-muted-foreground">
            If you need clarification on what you can or cannot do with RayUI, feel free to reach out.
          </p>
          <Button asChild className="rounded-full">
            <a href="/contact">Contact Us</a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
