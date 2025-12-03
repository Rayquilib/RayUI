import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { rayuiComponents } from "@/content/blocks-components";

type Params = {
  params: Promise<{
    blockId: string;
  }>;
};

export function generateStaticParams() {
  const blockIds = Object.keys(rayuiComponents);

  return blockIds.map((blockId) => ({
    blockId,
  }));
}

export default async function BlockPreviewPage({ params }: Params) {
  const { blockId } = await params;
  const BlocksComponent = rayuiComponents[blockId];

  if (!BlocksComponent) {
    notFound();
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <BlocksComponent />
    </div>
  );
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "RayUI — Preview",
};
