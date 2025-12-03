import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { siteConfig } from "@/config";
import { HomePageContent } from "@/components/home-page-content";

export const metadata: Metadata = {
  title: "RayUI - 60+ Free shadcn/ui Components for React",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "RayUI - 60+ Free shadcn/ui Components for React",
    description: siteConfig.description,
    url: siteConfig.url,
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

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "RayUI" }]} />
      <HomePageContent />
    </>
  );
}
