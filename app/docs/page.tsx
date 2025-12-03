import type { Metadata } from "next";
import { DocsPageContent } from "@/components/docs-page-content";

export const metadata: Metadata = {
  title: "Documentation - RayUI",
  description: "Learn how to use RayUI components in your React applications.",
  alternates: { canonical: "/docs" },
};

export default function DocsPage() {
  return <DocsPageContent />;
}
