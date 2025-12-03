"use client";

import Link from "next/link";
import { siteConfig } from "@/config";
import { IconBrandGithub, IconBrandTwitter, IconComponents, IconPalette, IconAccessible, IconBrandOpenSource } from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const features = [
  {
    title: "Beautifully Designed",
    description: "Carefully crafted components that look great out of the box. Focused on aesthetics and usability.",
    icon: IconPalette,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    title: "Fully Customizable",
    description: "Built with Tailwind CSS. Customize every aspect to match your brand identity with ease.",
    icon: IconComponents,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Accessible",
    description: "Built with accessibility in mind. WCAG compliant components ensuring everyone can use your app.",
    icon: IconAccessible,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Open Source",
    description: "Free to use for personal and commercial projects. MIT licensed and community driven.",
    icon: IconBrandOpenSource,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

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

export function HomePageContent() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] opacity-20" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-10 pb-32 md:pt-20 md:pb-48">
        <div className="mx-auto w-full max-w-(--breakpoint-xl) px-8">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center space-y-10"
          >
            <motion.div variants={item} className="space-y-6 max-w-4xl">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                v1.0 is now live
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                Build faster with <br />
                <span className="bg-gradient-to-r from-primary via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient-x">
                  RayUI Components
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A collection of 60+ beautiful, accessible, and production-ready components. 
                Copy, paste, and ship your next project in record time.
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link
                href="/blocks"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
                )}
              >
                Browse Components
              </Link>
              <Link
                href="/docs"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-8 py-6 text-lg border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/5 transition-all hover:scale-105"
                )}
              >
                Documentation
              </Link>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-6 pt-8 text-muted-foreground">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-muted group-hover:bg-foreground group-hover:text-background transition-colors">
                  <IconBrandGithub className="h-5 w-5" />
                </div>
                <span className="font-medium">Star on GitHub</span>
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-muted group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <IconBrandTwitter className="h-5 w-5" />
                </div>
                <span className="font-medium">Follow on Twitter</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="mx-auto w-full max-w-(--breakpoint-xl) px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Why choose RayUI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build modern applications, designed for the future.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl border border-border/50 bg-background/50 p-8 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className={cn("mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors", feature.bg)}>
                  <feature.icon className={cn("h-7 w-7", feature.color)} />
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-(--breakpoint-xl) relative rounded-[2.5rem] overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-12 md:p-24 text-center"
        >
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready to build something <span className="text-primary">amazing?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop wasting time on boilerplate. Start using RayUI components today and ship your projects faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/blocks"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-10 py-7 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105"
                )}
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
