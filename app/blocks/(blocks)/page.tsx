import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { CodeIcon, ReactIcon } from "@/components/icons";
import { siteConfig } from "@/config";
import { rayuiCategoriesMetadata } from "@/content/blocks-categories";
import { cn } from "@/lib/utils";
import { 
  IconLayoutGrid, 
  IconLogin, 
  IconTable, 
  IconLayoutSidebar, 
  IconChartBar, 
  IconUpload, 
  IconForms,
  IconSparkles,
  IconMessage,
  IconArrowRight
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Components - RayUI",
  description: siteConfig.description,
  alternates: { canonical: "/blocks" },
  openGraph: {
    title: "RayUI - 60+ Free shadcn/ui Components for React",
    description: siteConfig.description,
    url: `${siteConfig.url}/blocks`,
    siteName: "RayUI",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "RayUI - Free shadcn/ui components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RayUI - 60+ Free shadcn/ui Components for React",
    description: siteConfig.description,
    creator: "@rayyanquantum",
    site: "@rayyanquantum",
    images: [siteConfig.ogImage],
  },
};

const categoryIcons: Record<string, any> = {
  "dialogs": IconMessage,
  "file-upload": IconUpload,
  "form-layout": IconForms,
  "grid-list": IconLayoutGrid,
  "login": IconLogin,
  "stats": IconChartBar,
  "sidebar": IconLayoutSidebar,
  "ai": IconSparkles,
  "tables": IconTable,
};

const categoryDescriptions: Record<string, string> = {
  "dialogs": "Beautiful modal dialogs and popup components for user interactions",
  "file-upload": "Drag-and-drop file upload components with progress indicators",
  "form-layout": "Professional form layouts with validation and accessibility",
  "grid-list": "Responsive grid and list layouts for displaying content",
  "login": "Authentication forms with modern designs and security features",
  "stats": "Data visualization and statistics display components",
  "sidebar": "Navigation sidebars with collapsible menus and icons",
  "ai": "AI-powered components for modern applications",
  "tables": "Data tables with sorting, filtering, and pagination",
};

export default function Home() {
  const totalComponents = rayuiCategoriesMetadata.reduce(
    (sum, cat) => sum + parseInt(cat.count || "0"), 
    0
  );

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "RayUI" }]} />
      <div className="w-full">
        {/* Hero Section */}
        <div className="space-y-6 mb-16">
          <div className="space-y-4">
            <h1 className="font-bold text-4xl/[1.1] sm:text-5xl/[1.1] text-foreground tracking-tight md:text-6xl/[1.1]">
              Building Blocks for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Modern Web
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl">
              {totalComponents}+ clean, accessible, and production-ready components. 
              Built with React, TypeScript, and Tailwind CSS. Copy, paste, and ship faster.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <div className="flex items-center gap-2 border border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/30 rounded-full px-4 py-2 text-sm font-medium">
              <ReactIcon className="size-5 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-900 dark:text-blue-100">Works on all React frameworks</span>
            </div>

            <div className="flex items-center gap-2 border border-border bg-muted/50 rounded-full px-4 py-2 text-sm font-medium">
              <CodeIcon className="size-5 text-muted-foreground" />
              <span>Open Source & MIT Licensed</span>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">
              Explore by Category
            </h2>
            <p className="text-sm text-muted-foreground">
              {rayuiCategoriesMetadata.length} categories • {totalComponents} components
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rayuiCategoriesMetadata.map((block) => {
              const Icon = categoryIcons[block.id] || IconLayoutGrid;
              const description = categoryDescriptions[block.id] || "Explore this component category";
              
              return (
                <Link 
                  href={`/blocks/${block.id}`} 
                  key={`${block.id}-${block.name}`}
                  className="group relative"
                >
                  <div className="h-full space-y-6 rounded-2xl border-2 border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                    {/* Icon and Count */}
                    <div className="flex items-start justify-between">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl transition-all group-hover:bg-primary/30" />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary transition-all group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary/20 border border-primary/20">
                          <Icon className="h-7 w-7" />
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary border border-primary/20">
                          {block.count}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          components
                        </span>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        {block.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {description}
                      </p>
                    </div>

                    {/* View Components Link */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary pt-2">
                      <span>Explore components</span>
                      <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>

                    {/* Decorative gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            All components are free, open-source, and ready to use in your projects. 
            No installation required, just copy and paste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-8 py-4 text-base font-medium hover:bg-muted transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

