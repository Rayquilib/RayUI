#!/usr/bin/env node
import { Command } from "commander";
import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { join } from "path";
import { categoryIds } from "../content/declarations";

const program = new Command();

program
    .name("rayui")
    .description("RayUI CLI - Generate production-ready UI blocks")
    .version("1.0.0");

program
    .command("new <block-name>")
    .description("Create a new RayUI block")
    .option("-c, --category <category>", "Block category", "login")
    .option("-f, --framework <framework>", "Target framework (react|vue|html)", "react")
    .option("--register", "Auto-register in metadata", false)
    .action((blockName: string, options: any) => {
        const { category, framework, register } = options;

        console.log(`\n🚀 Creating new RayUI block: ${blockName}`);
        console.log(`   Category: ${category}`);
        console.log(`   Framework: ${framework}`);

        try {
            // Validate category
            const validCategories = Object.keys(categoryIds);
            if (!validCategories.includes(category)) {
                console.error(`\n❌ Invalid category. Valid options: ${validCategories.join(", ")}`);
                process.exit(1);
            }

            const categoryId = categoryIds[category as keyof typeof categoryIds];
            const componentDir = join(process.cwd(), `content/components/${categoryId}`);
            const markdownDir = join(process.cwd(), `content/markdown/${categoryId}`);

            // Ensure directories exist
            mkdirSync(componentDir, { recursive: true });
            mkdirSync(markdownDir, { recursive: true });

            // Generate component based on framework
            if (framework === "react") {
                generateReactComponent(blockName, categoryId, componentDir, markdownDir);
            } else if (framework === "vue") {
                generateVueComponent(blockName, categoryId, componentDir, markdownDir);
            } else if (framework === "html") {
                generateHTMLComponent(blockName, categoryId, componentDir, markdownDir);
            }

            // Auto-register if requested
            if (register) {
                registerInMetadata(blockName, categoryId);
            }

            console.log(`\n✅ Successfully created ${blockName}!`);
            console.log(`\n📁 Files created:`);
            console.log(`   • content/components/${categoryId}/${blockName}.tsx`);
            console.log(`   • content/markdown/${categoryId}/${blockName}.mdx`);

            if (!register) {
                console.log(`\n📝 Next steps:`);
                console.log(`   1. Add metadata entry to content/blocks-metadata.ts:`);
                console.log(`      {`);
                console.log(`        id: "${blockName}",`);
                console.log(`        category: "${categoryId}",`);
                console.log(`        name: "${formatName(blockName)}",`);
                console.log(`        type: "file",`);
                console.log(`      }`);
                console.log(`   2. Run: npm run generate:registry`);
                console.log(`   3. Test: npm run dev`);
            }

        } catch (error) {
            console.error(`\n❌ Error creating block:`, error);
            process.exit(1);
        }
    });

function generateReactComponent(blockName: string, categoryId: string, componentDir: string, markdownDir: string) {
    const componentPath = join(componentDir, `${blockName}.tsx`);
    const markdownPath = join(markdownDir, `${blockName}.mdx`);

    const componentContent = `import { JSX } from "react";

export default function ${toPascalCase(blockName)}(): JSX.Element {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            ${formatName(blockName)}
          </h1>
          <p className="text-sm text-muted-foreground">
            Built with RayUI - Production-ready UI blocks
          </p>
        </div>
        
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="space-y-4">
            {/* Add your component content here */}
            <div className="flex items-center justify-center rounded-md bg-primary/10 p-8">
              <p className="text-sm text-primary">
                Your ${formatName(blockName)} content goes here
              </p>
            </div>
          </div>
        </div>
        
        <p className="text-center text-xs text-muted-foreground">
          Powered by RayUI • No copy-paste required
        </p>
      </div>
    </div>
  );
}
`;

    const markdownContent = `---
title: "${formatName(blockName)}"
description: "A ${categoryId} block built with RayUI"
---

import ${toPascalCase(blockName)} from "./${blockName}";

<${toPascalCase(blockName)} />
`;

    writeFileSync(componentPath, componentContent);
    writeFileSync(markdownPath, markdownContent);
}

function generateVueComponent(blockName: string, categoryId: string, componentDir: string, markdownDir: string) {
    const componentPath = join(componentDir, `${blockName}.vue`);

    const vueContent = `<template>
  <div class="flex min-h-screen w-full items-center justify-center bg-background p-4">
    <div class="w-full max-w-md space-y-6">
      <div class="space-y-2 text-center">
        <h1 class="text-3xl font-bold tracking-tight text-foreground">
          ${formatName(blockName)}
        </h1>
        <p class="text-sm text-muted-foreground">
          Built with RayUI - Production-ready UI blocks
        </p>
      </div>
      
      <div class="rounded-lg border border-border bg-card p-6 shadow-sm">
        <div class="space-y-4">
          <!-- Add your component content here -->
          <div class="flex items-center justify-center rounded-md bg-primary/10 p-8">
            <p class="text-sm text-primary">
              Your ${formatName(blockName)} content goes here
            </p>
          </div>
        </div>
      </div>
      
      <p class="text-center text-xs text-muted-foreground">
        Powered by RayUI • No copy-paste required
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add your component logic here
</script>
`;

    writeFileSync(componentPath, vueContent);
}

function generateHTMLComponent(blockName: string, categoryId: string, componentDir: string, markdownDir: string) {
    const componentPath = join(componentDir, `${blockName}.html`);

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${formatName(blockName)} - RayUI</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root {
      --background: oklch(1 0 0);
      --foreground: oklch(0.145 0 0);
      --primary: oklch(0.55 0.22 264);
      --muted-foreground: oklch(0.556 0 0);
      --border: oklch(0.922 0 0);
      --card: oklch(1 0 0);
    }
  </style>
</head>
<body class="bg-background">
  <div class="flex min-h-screen w-full items-center justify-center p-4">
    <div class="w-full max-w-md space-y-6">
      <div class="space-y-2 text-center">
        <h1 class="text-3xl font-bold tracking-tight text-foreground">
          ${formatName(blockName)}
        </h1>
        <p class="text-sm text-muted-foreground">
          Built with RayUI - Production-ready UI blocks
        </p>
      </div>
      
      <div class="rounded-lg border border-border bg-card p-6 shadow-sm">
        <div class="space-y-4">
          <!-- Add your component content here -->
          <div class="flex items-center justify-center rounded-md bg-primary/10 p-8">
            <p class="text-sm text-primary">
              Your ${formatName(blockName)} content goes here
            </p>
          </div>
        </div>
      </div>
      
      <p class="text-center text-xs text-muted-foreground">
        Powered by RayUI • No copy-paste required
      </p>
    </div>
  </div>
</body>
</html>
`;

    writeFileSync(componentPath, htmlContent);
}

function registerInMetadata(blockName: string, categoryId: string) {
    const metadataPath = join(process.cwd(), "content/blocks-metadata.ts");
    let content = readFileSync(metadataPath, "utf-8");

    const newEntry = `  {
    id: "${blockName}",
    category: "${categoryId}",
    name: "${formatName(blockName)}",
    type: "file",
  },`;

    // Insert before the closing bracket
    content = content.replace(/];$/, `${newEntry}\n];`);

    writeFileSync(metadataPath, content);
    console.log(`\n✅ Auto-registered in blocks-metadata.ts`);
}

function formatName(blockName: string): string {
    return blockName
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function toPascalCase(str: string): string {
    return str
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}

program.parse();
