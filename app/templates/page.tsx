import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Templates - RayUI",
  description: "Browse our collection of pre-built templates for your next project.",
};

export default function TemplatesPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Templates Coming Soon
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're working on a collection of beautiful, production-ready templates. Check back soon!
        </p>
        <div className="pt-6">
          <Link href="/blocks" className={buttonVariants()}>
            Browse Components
          </Link>
        </div>
      </div>
    </div>
  );
}
