import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Showcase - RayUI",
  description: "See what others are building with RayUI.",
};

export default function ShowcasePage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Showcase Coming Soon
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We'll feature amazing projects built with RayUI here. Submit yours!
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
