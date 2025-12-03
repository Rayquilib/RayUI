import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { Block } from "@/components/ui/block";
import { CustomMDX } from "@/components/ui/mdx";
import { siteConfig } from "@/config";
import { rayuiCategoriesMetadata } from "@/content/blocks-categories";
import { getBlocks } from "@/lib/blocks";
import { IconChevronLeft } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ blocksCategory: string }>;
};

type Params = {
  params: Promise<{
    blocksCategory: string;
  }>;
};

export async function generateStaticParams() {
  return rayuiCategoriesMetadata.map((category) => ({
    blocksCategory: category.id,
  }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const blocksCategory = rayuiCategoriesMetadata.find(
    (category) => category.id === params.blocksCategory
  );

  if (!blocksCategory) {
    return {};
  }

  const categoryName = blocksCategory.name;
  const blockCount = blocksCategory.count || 0;

  return {
    title: `${categoryName} Shadcn Blocks - ${blockCount} Free shadcn/ui ${categoryName} Components`,
    description: `Free shadcn/ui ${categoryName.toLowerCase()} blocks and components built with React, Tailwind CSS, and Next.js. Copy and paste ${blockCount} beautifully designed, accessible ${categoryName.toLowerCase()} UI blocks into your projects.`,
    alternates: { canonical: `/${params.blocksCategory}` },
    keywords: [
      `shadcn ${categoryName.toLowerCase()}`,
      `shadcn ${categoryName.toLowerCase()} blocks`,
      `shadcn/ui ${categoryName.toLowerCase()}`,
      `shadcn/ui ${categoryName.toLowerCase()} components`,
      `shadcn ui ${categoryName.toLowerCase()}`,
      `${categoryName.toLowerCase()} UI blocks`,
      `${categoryName.toLowerCase()} component react`,
      `${categoryName.toLowerCase()} UI tailwind`,
      `React ${categoryName.toLowerCase()} components`,
      `Tailwind ${categoryName.toLowerCase()}`,
      `Next.js ${categoryName.toLowerCase()}`,
      `free ${categoryName.toLowerCase()} blocks`,
      `free ${categoryName.toLowerCase()} component`,
      `copy paste ${categoryName.toLowerCase()}`,
      `${categoryName.toLowerCase()} examples`,
      `${categoryName.toLowerCase()} template`,
      `radix ${categoryName.toLowerCase()}`,
    ],
    openGraph: {
      title: `${categoryName} Shadcn Blocks - ${blockCount} Free shadcn/ui Components`,
      description: `Free shadcn/ui ${categoryName.toLowerCase()} blocks and components built with React, Tailwind CSS, and Next.js. Copy and paste ${blockCount} beautifully designed, accessible ${categoryName.toLowerCase()} UI blocks.`,
      url: `${siteConfig.url}/${params.blocksCategory}`,
      siteName: "blocks.so",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${categoryName} shadcn/ui blocks - blocks.so`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} Shadcn Blocks - ${blockCount} Free Components`,
      description: `Free shadcn/ui ${categoryName.toLowerCase()} blocks built with React, Tailwind CSS, and Next.js. Copy and paste ${blockCount} accessible UI blocks.`,
      creator: "@ephraimduncan_",
      site: "@ephraimduncan_",
      images: [siteConfig.ogImage],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { blocksCategory } = await params;
  const blocks = getBlocks({ blocksCategory });

  if (!blocks) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Shadcn Blocks" },
          { name: blocks.name, path: `/${blocksCategory}` },
        ]}
      />
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="space-y-6 mb-12">
          <Link
            href="/blocks"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors w-fit group"
          >
            <IconChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to all components</span>
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl/[1.1] sm:text-5xl/[1.1] font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {blocks.name}
              </h1>
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary border border-primary/20">
                {blocks.blocksData?.length || 0} components
              </span>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Beautifully designed {blocks.name.toLowerCase()} components built with React, TypeScript, and Tailwind CSS. 
              Production-ready and fully customizable. Copy, paste, and ship faster.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">Ready to use</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Fully accessible</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <span>Customizable</span>
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="space-y-8">
          {blocks.blocksData?.map((block, index) => (
            <div
              key={block.blocksId}
              className="group relative"
            >
              {/* Component Card */}
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                {/* Card Header */}
                <div className="flex items-center justify-between gap-4 p-6 border-b border-border/50 bg-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <a
                        href={`#${block.blocksId}`}
                        className="text-xl font-semibold hover:text-primary transition-colors underline-offset-4 hover:underline"
                      >
                        {block.name}
                      </a>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Click to view full component details
                      </p>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex items-center gap-2">
                    <Link
                      href={`#${block.blocksId}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Preview Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-muted/50 to-muted overflow-hidden">
                  <iframe
                    src={`/blocks/preview/${block.blocksId}`}
                    title={`${block.name} preview`}
                    className="absolute inset-0 w-full h-full pointer-events-none scale-90 origin-top-left"
                    style={{ 
                      transform: 'scale(0.5)',
                      width: '200%',
                      height: '200%',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="rounded-full bg-background/90 backdrop-blur-sm px-6 py-3 text-sm font-medium shadow-lg border border-border">
                      Click "View Details" to explore →
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 bg-muted/20 border-t border-border/50">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        {block.meta?.type === 'directory' ? 'Multi-file' : 'Single file'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                        Responsive design
                      </span>
                    </div>
                    <span className="text-primary font-medium">
                      #{block.blocksId}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Component Details (Original Block Components) */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="mb-12 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">
              Component Details & Code
            </h2>
            <p className="text-muted-foreground">
              Explore each component in detail with live preview, code view, and installation instructions.
            </p>
          </div>
          
          <div className="space-y-16">
            {blocks.blocksData?.map((block) => (
              <Block
                key={block.blocksId}
                name={block.name}
                code={block.codeSource}
                meta={block.meta}
                codeSource={
                  block.codeSource && (
                    <CustomMDX source={block.codeSource.toString()} />
                  )
                }
                blocksId={block.blocksId}
                blocksCategory={block.blocksCategory}
                fileTree={block.fileTree}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
