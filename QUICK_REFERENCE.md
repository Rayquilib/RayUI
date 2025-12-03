# RayUI Quick Reference

## 🚀 Quick Start

```bash
# Install a component
npx shadcn@latest add @rayui/login-01

# Create new block
npm run new my-block -- --category login --framework react

# Generate registry
npm run generate:registry

# Export to Vue/HTML
npm run export:frameworks

# Start dev server
npm run dev
```

## 🎨 Themes

```tsx
// Light mode (default)
<Component />

// Dark mode
<div className="dark">
  <Component />
</div>
```

## 🎯 Design Tokens

```typescript
import { colors } from "./tokens/colors";
import { gradients } from "./tokens/gradients";

colors.light.primary;  // oklch(0.55 0.22 264)
gradients["rayui-primary"];  // Linear gradient
```

## 📦 Tailwind Preset

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('./tailwind-preset')],
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
};
```

## 🛠️ CLI Commands

| Command | Description |
|---------|-------------|
| `npm run new <name>` | Create new block |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run generate:registry` | Generate registry |
| `npm run export:frameworks` | Export to Vue/HTML |

## 🎨 Color Palette

| Token | Light | Dark |
|-------|-------|------|
| Primary | `oklch(0.55 0.22 264)` | `oklch(0.65 0.22 264)` |
| Background | `oklch(1 0 0)` | `oklch(0.145 0 0)` |
| Foreground | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` |

## 📁 Project Structure

```
rayui/
├── tokens/          # Design tokens
├── templates/       # Documentation templates
├── scripts/         # CLI tools
├── content/         # Components & metadata
└── tailwind-preset.js
```

## 🔗 Links

- Docs: https://rayui.so
- GitHub: https://github.com/rayyanquantum/rayui
- Twitter: @rayyanquantum
