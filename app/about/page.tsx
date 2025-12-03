import type { Metadata } from "next";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "About - RayUI",
  description: "Learn more about RayUI and Rayyan Quantum AI Labs.",
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About RayUI</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            RayUI is a modern UI component library built for React developers who want to ship beautiful applications faster.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe that building beautiful user interfaces shouldn't be time-consuming or complicated. 
            RayUI provides production-ready components that you can copy, paste, and customize to fit your needs.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Built by Rayyan Quantum AI Labs</h2>
          <p className="text-muted-foreground leading-relaxed">
            RayUI is developed and maintained by{" "}
            <a href={siteConfig.links.website} target="_blank" rel="noreferrer" className="text-primary hover:underline">
              Rayyan Quantum AI Labs
            </a>
            , a team dedicated to creating cutting-edge tools and technologies for developers.
          </p>
        </div>
      </div>
    </div>
  );
}
