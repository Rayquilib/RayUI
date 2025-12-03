#!/usr/bin/env node
/**
 * Multi-Framework Export Script
 * Generates Vue and HTML versions of React components
 */

import fs from "fs/promises";
import path from "path";
import { rayuiMetadata } from "../content/blocks-metadata";

interface ExportOptions {
    framework: "vue" | "html" | "all";
    outputDir: string;
    verbose: boolean;
}

async function exportToVue(reactCode: string, componentName: string): Promise<string> {
    // Basic React to Vue conversion
    // This is a simplified conversion - for production, use a proper parser

    let vueCode = reactCode;

    // Convert JSX.Element to Vue template
    vueCode = vueCode.replace(/: JSX\.Element/g, "");
    vueCode = vueCode.replace(/export default function (\w+)\(\)/g, "<template>");

    // Convert className to class
    vueCode = vueCode.replace(/className=/g, "class=");

    // Add Vue script setup
    const scriptSetup = `<script setup lang="ts">
// Component logic here
</script>

`;

    // Wrap in template tags
    vueCode = `${scriptSetup}<template>
  <!-- Converted from React -->
  ${vueCode}
</template>
`;

    return vueCode;
}

async function exportToHTML(reactCode: string, componentName: string): Promise<string> {
    // Extract JSX and convert to HTML
    let htmlCode = reactCode;

    // Remove React imports and exports
    htmlCode = htmlCode.replace(/import .+;/g, "");
    htmlCode = htmlCode.replace(/export default function .+\{/g, "");
    htmlCode = htmlCode.replace(/className=/g, "class=");

    // Wrap in HTML boilerplate
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${componentName} - RayUI</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="/rayui-theme.css">
</head>
<body>
  ${htmlCode}
</body>
</html>
`;

    return html;
}

async function exportComponent(
    componentPath: string,
    options: ExportOptions
): Promise<void> {
    const componentName = path.basename(componentPath, ".tsx");
    const componentCode = await fs.readFile(componentPath, "utf-8");

    if (options.framework === "vue" || options.framework === "all") {
        const vueCode = await exportToVue(componentCode, componentName);
        const vueOutputPath = path.join(
            options.outputDir,
            "vue",
            `${componentName}.vue`
        );

        await fs.mkdir(path.dirname(vueOutputPath), { recursive: true });
        await fs.writeFile(vueOutputPath, vueCode);

        if (options.verbose) {
            console.log(`✓ Exported Vue: ${componentName}.vue`);
        }
    }

    if (options.framework === "html" || options.framework === "all") {
        const htmlCode = await exportToHTML(componentCode, componentName);
        const htmlOutputPath = path.join(
            options.outputDir,
            "html",
            `${componentName}.html`
        );

        await fs.mkdir(path.dirname(htmlOutputPath), { recursive: true });
        await fs.writeFile(htmlOutputPath, htmlCode);

        if (options.verbose) {
            console.log(`✓ Exported HTML: ${componentName}.html`);
        }
    }
}

async function main() {
    const options: ExportOptions = {
        framework: "all",
        outputDir: path.join(process.cwd(), "dist/exports"),
        verbose: true,
    };

    console.log("🚀 Starting multi-framework export...\n");

    let exportedCount = 0;

    for (const block of rayuiMetadata) {
        if (block.type === "file") {
            const componentPath = path.join(
                process.cwd(),
                "content/components",
                block.category,
                `${block.id}.tsx`
            );

            try {
                await exportComponent(componentPath, options);
                exportedCount++;
            } catch (error) {
                console.error(`✗ Failed to export ${block.id}:`, error);
            }
        }
    }

    console.log(`\n✅ Exported ${exportedCount} components`);
    console.log(`📁 Output directory: ${options.outputDir}`);
    console.log(`\nFrameworks:`);
    console.log(`  • Vue: ${path.join(options.outputDir, "vue")}`);
    console.log(`  • HTML: ${path.join(options.outputDir, "html")}`);
}

main().catch((error) => {
    console.error("❌ Export failed:", error);
    process.exit(1);
});
