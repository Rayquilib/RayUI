import "@/app/globals.css";
import { SeoJsonLd } from "@/components/seo-jsonld";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist_Mono, Outfit } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

const fontSans = localFont({
  src: "../public/font/font-medium.otf",
  variable: "--font-sans",
  fallback: ["DM Sans", "system-ui", "sans-serif"],
});

const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "RayUI",
  title: {
    default: "RayUI - 60+ Free shadcn/ui Components for React",
    template: "%s | RayUI - shadcn/ui components",
  },
  description: siteConfig.description,
  keywords: [
    "rayui",
    "shadcn components",
    "shadcn ui components",
    "shadcn/ui components",
    "shadcn ui library",
    "free shadcn components",
    "shadcn ui examples",
    "shadcn code snippets",
    "React UI components",
    "Tailwind CSS components",
    "Next.js components",
    "shadcn/ui",
    "copy paste components",
    "Open source UI components",
    "accessible components",
    "React components library",
    "UI components for developers",
    "shadcn previews",
    "shadcn templates",
    "shadcn",
    "shadcn ui",
    "shadcn examples",
    "shadcn starter",
    "radix ui components",
    "shadcn dialog component",
    "shadcn form component",
    "shadcn table component",
    "shadcn sidebar",
    "shadcn login",
    "how to use shadcn",
    "best shadcn components",
    "shadcn react components",
    "shadcn next.js",
    "shadcn tailwind",
    "ui components react",
    "free react ui kit",
    "shadcn ui kit",
    "react component library",
    "tailwind ui components",
  ],
  authors: [
    {
      name: "Rayyan Quantum AI Labs",
      url: "https://rayyanquantum.ai",
    },
  ],
  creator: "Rayyan Quantum AI Labs",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "RayUI - 60+ Free shadcn/ui Components for React",
    description: siteConfig.description,
    siteName: "RayUI",
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
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  category: "Developer Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            crossOrigin="anonymous"
            src="//unpkg.com/react-grab/dist/index.global.js"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body
        className={cn(fontSans.variable, fontMono.variable, outfit.variable, "antialiased")}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <TailwindIndicator />
          <Toaster />
          <SeoJsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
