import { siteConfig } from "@/config";
import { rayuiCategoriesMetadata } from "@/content/blocks-categories";

export function SeoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "RayUI - Shadcn UI Components",
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "RayUI",
        url: siteConfig.url,
        logo: `${siteConfig.url}/opengraph-image.png`,
        sameAs: [siteConfig.links.twitter, siteConfig.links.github],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          url: siteConfig.links.github,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "RayUI - Shadcn UI Components Library",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description: siteConfig.description,
        url: siteConfig.url,
        author: {
          "@type": "Organization",
          name: "Rayyan Quantum AI Labs",
          url: "https://rayyanquantum.ai",
        },
        keywords:
          "rayui, shadcn components, shadcn ui components, shadcn/ui components, React UI components, Tailwind CSS components, Next.js components, free UI components, shadcn, shadcn ui, radix ui, ui library",
        softwareVersion: "1.0",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          ratingCount: "1",
        },
      },
      {
        "@type": "ItemList",
        name: "Free Shadcn UI Components",
        description:
          "60+ free shadcn/ui components for React, Tailwind CSS, and Next.js",
        numberOfItems: rayuiCategoriesMetadata.length,
        itemListElement: rayuiCategoriesMetadata.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${category.name} Shadcn UI Components`,
          description: `Free shadcn/ui ${category.name.toLowerCase()} components`,
          url: `${siteConfig.url}/${category.id}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is RayUI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "RayUI is a collection of pre-built, copy-paste UI components built with shadcn/ui, React, and Tailwind CSS. They are ready-to-use building blocks that you can copy directly into your projects without installing any dependencies. RayUI provides 60+ free shadcn components including dialogs, forms, tables, sidebars, login pages, and more.",
            },
          },
          {
            "@type": "Question",
            name: "How do I use RayUI components?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Using RayUI components is simple: 1) Browse the collection at rayui.so to find the component you need, 2) Click on the component to view the code, 3) Copy the code directly into your React or Next.js project, 4) Customize the styling and functionality as needed. No npm install required - just copy and paste.",
            },
          },
          {
            "@type": "Question",
            name: "Are RayUI components free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all RayUI components are completely free to use in personal and commercial projects. The components are open source and you can use them without attribution. They are built with shadcn/ui, Tailwind CSS, and React.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between shadcn/ui and RayUI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "shadcn/ui is a component library that provides individual UI primitives like buttons, inputs, and dialogs. RayUI provides complete, pre-designed UI components built using shadcn/ui components - like full login forms, dashboard sidebars, data tables with sorting, and AI chat interfaces. Think of RayUI as ready-made combinations of shadcn/ui components.",
            },
          },
          {
            "@type": "Question",
            name: "Do RayUI components work with Next.js?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all RayUI components are fully compatible with Next.js (both App Router and Pages Router), as well as other React frameworks like Remix, Vite, and Create React App. The components use React and Tailwind CSS, making them framework-agnostic.",
            },
          },
          {
            "@type": "Question",
            name: "What components are available in RayUI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "RayUI offers 60+ free shadcn components across multiple categories including: Dialogs and Modals, File Upload components, Form Layouts, Login and Signup pages, Stats and Dashboard widgets, Grid Lists, Sidebars and Navigation, AI Chat interfaces, and Data Tables. New components are added regularly.",
            },
          },
        ],
      },
    ],
  };

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
