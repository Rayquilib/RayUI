import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog - RayUI",
  description: "Read our latest articles and updates.",
};

export default function BlogPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Blog Coming Soon
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay tuned for articles, tutorials, and updates about RayUI.
        </p>
        <div className="pt-6">
          <Link href="/" className={buttonVariants()}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
