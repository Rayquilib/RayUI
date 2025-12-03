"use client";

import { siteConfig } from "@/config";
import { motion } from "motion/react";
import { IconBrandNextjs, IconBrandTailwind, IconBrandFramer, IconBrandGithub, IconBrandTwitter, IconWorld, IconTerminal2, IconPuzzle, IconMoon, IconAccessible, IconPalette } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

export function DocsPageContent() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-6">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        {/* Header */}
        <motion.div variants={item} className="space-y-6 border-b border-border/40 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Everything you need to know to install and use RayUI components in your React applications.
          </p>
        </motion.div>

        {/* Getting Started */}
        <motion.section variants={item} className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <IconTerminal2 className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Getting Started</h2>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
                  Configure your components.json
                </h3>
                <p className="text-muted-foreground">
                  Add the RayUI registry to your <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">components.json</code> file:
                </p>
                <div className="rounded-xl border border-border/50 bg-zinc-950 dark:bg-zinc-900 p-6 shadow-sm overflow-hidden">
                  <pre className="text-sm font-mono text-zinc-100 overflow-x-auto">
                    <code>{`{
  "registries": {
    "@rayui": "https://rayui.so/r/{name}.json"
  }
}`}</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
                  Add components
                </h3>
                <p className="text-muted-foreground">
                  Use the shadcn CLI to add components to your project:
                </p>
                <div className="rounded-xl border border-border/50 bg-zinc-950 dark:bg-zinc-900 p-6 shadow-sm overflow-hidden">
                  <pre className="text-sm font-mono text-zinc-100 overflow-x-auto">
                    <code>{`# Add a specific component
npx shadcn@latest add @rayui/login-01

# Add a dialog component
npx shadcn@latest add @rayui/dialog-01

# Add a sidebar component
npx shadcn@latest add @rayui/sidebar-01`}</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
                  Alternative: Direct URL
                </h3>
                <p className="text-muted-foreground">
                  You can also add components directly from the registry URL:
                </p>
                <div className="rounded-xl border border-border/50 bg-zinc-950 dark:bg-zinc-900 p-6 shadow-sm overflow-hidden">
                  <pre className="text-sm font-mono text-zinc-100 overflow-x-auto">
                    <code>{`npx shadcn@latest add https://rayui.so/r/login-01.json`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-border/50 bg-muted/30 p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <IconPuzzle className="h-5 w-5 text-primary" />
                  Tech Stack
                </h4>
                <div className="space-y-3">
                  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-background transition-colors group">
                    <IconBrandNextjs className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Next.js</span>
                  </a>
                  <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-background transition-colors group">
                    <IconBrandTailwind className="h-5 w-5 text-muted-foreground group-hover:text-blue-500" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Tailwind CSS</span>
                  </a>
                  <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-background transition-colors group">
                    <IconBrandFramer className="h-5 w-5 text-muted-foreground group-hover:text-pink-500" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Framer Motion</span>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border/50 bg-muted/30 p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <IconWorld className="h-5 w-5 text-primary" />
                  Community
                </h4>
                <div className="space-y-3">
                  <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-background transition-colors group">
                    <IconBrandGithub className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">GitHub</span>
                  </a>
                  <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-background transition-colors group">
                    <IconBrandTwitter className="h-5 w-5 text-muted-foreground group-hover:text-blue-400" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section variants={item} className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight border-b border-border/40 pb-4">Features</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: IconPalette,
                title: "Beautifully Designed",
                description: "Carefully crafted components that look great out of the box.",
                color: "text-pink-500",
                bg: "bg-pink-500/10"
              },
              {
                icon: IconAccessible,
                title: "Accessible",
                description: "Built with accessibility in mind, ensuring your app is usable by everyone.",
                color: "text-green-500",
                bg: "bg-green-500/10"
              },
              {
                icon: IconPuzzle,
                title: "Customizable",
                description: "Built with Tailwind CSS, making it easy to customize to your needs.",
                color: "text-blue-500",
                bg: "bg-blue-500/10"
              },
              {
                icon: IconMoon,
                title: "Dark Mode",
                description: "First-class support for dark mode out of the box.",
                color: "text-purple-500",
                bg: "bg-purple-500/10"
              }
            ].map((feature) => (
              <div key={feature.title} className="group rounded-2xl border border-border/50 bg-background p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className={cn("mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors", feature.bg)}>
                  <feature.icon className={cn("h-6 w-6", feature.color)} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Browse Components CTA */}
        <motion.section variants={item} className="relative rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-12 text-center">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Ready to explore?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out our collection of 60+ components and start building your next project.
            </p>
            <Link 
              href="/blocks" 
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:scale-105 transition-all"
            >
              View All Components
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
