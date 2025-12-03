# {{BLOCK_NAME}} - RayUI Block

## Overview

{{BLOCK_NAME}} is a production-ready UI block built with RayUI. This component provides {{DESCRIPTION}}.

## Value Proposition

✅ **No copy-paste required** - Install directly into your codebase  
✅ **No HTML conversion required** - Ready-to-use React/Vue/HTML components  
✅ **No repetitive setup** - Pre-configured with Tailwind CSS and RayUI theme  
✅ **Every block installs real code** - Modify locally, not through a Playground  
✅ **Production-ready** - Built with TypeScript, accessibility, and best practices  

## Installation

### Using the CLI (Recommended)

```bash
npx shadcn@latest add @rayui/{{BLOCK_ID}}
```

### Manual Installation

1. Copy the component code from the registry
2. Install dependencies:
   ```bash
   npm install @tabler/icons-react
   ```
3. Add the component to your project

## Usage

### React

```tsx
import {{COMPONENT_NAME}} from "@/components/{{BLOCK_ID}}";

export default function Page() {
  return <{{COMPONENT_NAME}} />;
}
```

### Vue

```vue
<template>
  <{{COMPONENT_NAME}} />
</template>

<script setup>
import {{COMPONENT_NAME}} from "@/components/{{BLOCK_ID}}.vue";
</script>
```

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="rayui-theme.css">
</head>
<body>
  <!-- Include the component HTML here -->
</body>
</html>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Additional CSS classes |
| `variant` | `"default" \| "outline"` | `"default"` | Visual variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Component size |

## Examples

### Basic Usage

```tsx
<{{COMPONENT_NAME}} />
```

### With Custom Styling

```tsx
<{{COMPONENT_NAME}} 
  className="custom-class"
  variant="outline"
  size="lg"
/>
```

### With Theme

```tsx
<div className="dark">
  <{{COMPONENT_NAME}} />
</div>
```

## Theme Support

This component automatically adapts to:
- ✅ Light mode
- ✅ Dark mode  
- ✅ RayUI branded theme (#0066CC)

Theme switching is handled via CSS variables. No additional configuration needed.

## Accessibility

- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Dependencies

- `react` (for React version)
- `@tabler/icons-react` (icons)
- `tailwindcss` (styling)

## License

MIT - Part of the RayUI library

## Support

- 📖 [Documentation](https://rayui.so)
- 💬 [GitHub Discussions](https://github.com/rayyanquantum/rayui/discussions)
- 🐛 [Report Issues](https://github.com/rayyanquantum/rayui/issues)

---

**Built with RayUI** - The fastest way to install production-ready UI blocks into React apps.
