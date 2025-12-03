import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog - RayUI",
  description: "See what's new in RayUI.",
};

export default function ChangelogPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Changelog</h1>
      <div className="space-y-12">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">v1.0.0</h2>
            <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Initial release with 60+ components</li>
            <li>Modern UI with animations</li>
            <li>Dark mode support</li>
            <li>Full documentation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
