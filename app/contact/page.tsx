import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact-page-content";

export const metadata: Metadata = {
  title: "Contact - RayUI",
  description: "Get in touch with the RayUI team.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
