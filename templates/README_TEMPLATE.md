# RayUI - Production-Ready UI Blocks

> The fastest way to install production-ready UI blocks into React apps, powered by a Registry and CLI. Not copy-paste, real components.

## 🎯 Value Proposition

### No copy-paste required
Install components directly into your codebase with a single command. No manual copying, no formatting issues.

### No HTML conversion required  
Get ready-to-use React, Vue, or HTML components. Choose your framework, we handle the rest.

### No repetitive setup
Pre-configured with Tailwind CSS, TypeScript, and RayUI theme. Start building immediately.

### Every block installs real code into your codebase
Components become part of your project. Modify, extend, and customize locally without limitations.

### Modify locally, not through a Playground
Full control over your components. Edit the source code directly in your IDE.

## 🚀 Quick Start

### Installation

```bash
# Install a component
npx shadcn@latest add @rayui/login-01

# Create a new block
npm run new my-block -- --category login --framework react

# Generate registry
npm run generate:registry
```

### Usage

```tsx
import Login01 from "@/components/login-01";

export default function Page() {
  return <Login01 />;
}
```

## 🎨 Features

- **60+ Production-Ready Blocks** - Login forms, dashboards, stats, tables, and more
- **Multi-Framework Support** - React, Vue, and HTML exports
- **Theme System** - Light, dark, and branded RayUI blue theme
- **TypeScript First** - Full type safety and IntelliSense
- **Tailwind CSS** - Utility-first styling with RayUI preset
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support
- **CLI Generator** - Scaffold new blocks with a single command

## 📦 Available Blocks

### Authentication
- `login-01` through `login-09` - Various login form designs
- `dialog-01` through `dialog-12` - Modal and dialog components

### Data Display
- `table-01` through `table-05` - Data tables with sorting and filtering
- `stats-01` through `stats-13` - Statistics and metrics displays
- `grid-list-01` through `grid-list-03` - Grid and list layouts

### Forms
- `form-layout-01` through `form-layout-05` - Form layouts and patterns
- `file-upload-01` through `file-upload-06` - File upload components

### Navigation
- `sidebar-01` through `sidebar-06` - Sidebar navigation patterns

### AI & Interactive
- `ai-01` through `ai-04` - AI chat and interactive components

## 🎨 Theme System

RayUI includes a comprehensive theme system with:

- **Light Theme** - Clean, professional light mode
- **Dark Theme** - Modern dark mode with proper contrast
- **RayUI Blue** - Branded theme with professional blue (#0066CC)

### Using Themes

```tsx
// Light mode (default)
<div>
  <YourComponent />
</div>

// Dark mode
<div className="dark">
  <YourComponent />
</div>
```

### Tailwind Preset

```js
// tailwind.config.js
module.exports = {
  presets: [require('./tailwind-preset')],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};
```

## 🛠️ CLI Commands

```bash
# Create a new block
npm run new <block-name> -- --category <category> --framework <react|vue|html>

# Generate registry
npm run generate:registry

# Start development server
npm run dev

# Build for production
npm run build
```

## 📖 Documentation

Each block includes comprehensive documentation:

- **Overview** - What the component does
- **Installation** - How to install and set up
- **Usage Examples** - React, Vue, and HTML examples
- **Props Reference** - All available props and types
- **Theme Support** - How theming works
- **Accessibility** - Accessibility features

## 🎯 Design Tokens

RayUI uses a centralized design token system:

```typescript
import { colors } from "./tokens/colors";
import { gradients } from "./tokens/gradients";

// Use in your components
const primaryColor = colors.light.primary; // oklch(0.55 0.22 264)
const gradient = gradients["rayui-primary"];
```

## 🌐 Multi-Framework Support

### React (Default)
```tsx
import Component from "@/components/block-name";
<Component />
```

### Vue
```vue
<template>
  <Component />
</template>

<script setup>
import Component from "@/components/block-name.vue";
</script>
```

### HTML
```html
<link rel="stylesheet" href="rayui-theme.css">
<div class="rayui-component">
  <!-- Component HTML -->
</div>
```

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

MIT © Rayyan Quantum AI Labs

## 🔗 Links

- **Website**: [https://rayui.so](https://rayui.so)
- **Documentation**: [https://rayui.so/docs](https://rayui.so/docs)
- **GitHub**: [https://github.com/rayyanquantum/rayui](https://github.com/rayyanquantum/rayui)
- **Twitter**: [@rayyanquantum](https://twitter.com/rayyanquantum)

---

**Built with ❤️ by Rayyan Quantum AI Labs**
