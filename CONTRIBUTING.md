# Contributing to RayUI 🚀

Thank you for your interest in contributing to RayUI! We're excited to have you join our community of developers building beautiful, accessible UI components.

This guide will help you get started with contributing to the RayUI project.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Adding New Components](#adding-new-components)
- [Contribution Workflow](#contribution-workflow)
- [Code Guidelines](#code-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

---

## 🤝 Code of Conduct

By participating in this project, you agree to:

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the community
- Show empathy towards other community members

---

## 🎯 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** or **Bun** - Package manager (Bun recommended for faster performance)
- **Git** - Version control

### Quick Start

1. **Fork the repository** on GitHub
   - Visit [https://github.com/Rayquilib/RayUI](https://github.com/Rayquilib/RayUI)
   - Click the "Fork" button in the top right

2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/RayUI.git
   cd RayUI
   ```

3. **Add upstream remote** to keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/Rayquilib/RayUI.git
   ```

---

## 💻 Development Setup

### Installation

Install dependencies using npm or Bun:

```bash
# Using npm
npm install

# Using Bun (recommended)
bun install
```

### Running the Development Server

Start the development server:

```bash
# Using npm
npm run dev

# Using Bun
bun run dev
```

The application will be available at **http://localhost:3000**

### Available Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build            # Build the production application
npm run start            # Start production server

# Registry Management
npm run generate:registry    # Generate registry.json from components
npm run generate:markdown    # Generate MDX documentation files
npm run validate:registry    # Validate registry structure and schema

# Code Quality
npm run lint             # Lint codebase
npm run format           # Format code with Prettier
```

---

## 📁 Project Structure

Understanding the project structure will help you navigate and contribute effectively:

```
RayUI/
├── app/                        # Next.js App Router
│   ├── (home)/                # Homepage
│   ├── blocks/                # Component showcase
│   ├── docs/                  # Documentation pages
│   └── ...                    # Other pages (about, contact, etc.)
│
├── components/                 # Shared React components
│   ├── ui/                    # Base UI components (shadcn/ui)
│   ├── header.tsx             # Site header
│   ├── footer.tsx             # Site footer
│   └── ...                    # Other shared components
│
├── content/
│   ├── components/            # Component implementations
│   │   ├── ai/               # AI components
│   │   ├── login/            # Login components
│   │   ├── dialogs/          # Dialog components
│   │   └── ...               # Other categories
│   ├── markdown/              # Generated MDX documentation
│   ├── blocks-metadata.ts     # Component metadata registry
│   └── blocks-categories.tsx  # Category definitions
│
├── lib/                       # Utility functions
│   ├── utils.ts              # General utilities
│   ├── blocks.ts             # Block/component utilities
│   └── ...
│
├── public/
│   ├── r/                    # Registry JSON files
│   ├── thumbnails/           # Component thumbnails
│   └── ...                   # Static assets
│
├── scripts/                   # Build and automation scripts
│   ├── generate-registry.ts  # Registry generation
│   ├── generate-markdown.ts  # Documentation generation
│   └── ...
│
└── config/                    # Configuration files
    └── site.ts               # Site configuration
```

---

## ✨ Adding New Components

### Step 1: Create the Component

Create your component file in the appropriate category:

```bash
content/components/{category}/{component-name}.tsx
```

Example:
```bash
content/components/login/login-10.tsx
```

### Step 2: Component Template

Use this template for your component:

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// ... other imports

export default function LoginTen() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Your component code */}
    </div>
  );
}
```

### Step 3: Register Metadata

Add your component metadata to `content/blocks-metadata.ts`:

```typescript
{
  name: "login-10",
  type: "registry:block",
  registryDependencies: ["button", "input"],
  files: [
    {
      path: "content/components/login/login-10.tsx",
      type: "registry:block",
      target: "",
    },
  ],
  category: "login",
  subcategory: "Authentication",
  description: "A modern login form with social authentication",
}
```

### Step 4: Map the Component

Add the component mapping in `content/blocks-components.tsx`:

```typescript
import LoginTen from "./components/login/login-10";

export const blocksComponents: Record<string, React.ComponentType> = {
  // ... existing components
  "login-10": LoginTen,
};
```

### Step 5: Export from Category

Export your component in `content/components/{category}/index.ts`:

```typescript
export { default as LoginTen } from "./login-10";
```

### Step 6: Generate Registry

Run the registry generation script:

```bash
npm run generate:registry
```

This will:
- Generate the registry JSON file
- Create MDX documentation
- Update the component showcase

---

## 🔄 Contribution Workflow

### 1. Sync Your Fork

Before starting work, sync your fork with the upstream repository:

```bash
git checkout main
git fetch upstream
git merge upstream/main
```

### 2. Create a Feature Branch

Create a new branch for your contribution:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `style/` - UI/styling changes

### 3. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments where necessary
- Ensure accessibility standards

### 4. Test Your Changes

```bash
# Build the project
npm run build

# Test locally
npm run dev
```

Verify:
- ✅ Component renders correctly
- ✅ Responsive design works
- ✅ Dark mode support
- ✅ Accessibility (keyboard navigation, screen readers)
- ✅ No console errors

### 5. Commit Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add new login component with social auth"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

1. Go to the [RayUI repository](https://github.com/Rayquilib/RayUI)
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill in the PR template with:
   - Clear description of changes
   - Screenshots (if UI changes)
   - Related issues (if any)
5. Submit the pull request

---

## 📝 Code Guidelines

### Component Guidelines

1. **Accessibility First**
   - Use semantic HTML
   - Include ARIA labels
   - Ensure keyboard navigation
   - Test with screen readers

2. **Responsive Design**
   - Mobile-first approach
   - Use Tailwind responsive classes
   - Test on multiple screen sizes

3. **Dark Mode Support**
   - Use Tailwind dark mode classes
   - Test in both light and dark themes

4. **Performance**
   - Optimize images
   - Minimize bundle size
   - Use React best practices

### Code Style

- **TypeScript**: Use TypeScript for type safety
- **Formatting**: Use Prettier (automatic on save)
- **Naming**: 
  - Components: PascalCase (`LoginForm`)
  - Files: kebab-case (`login-form.tsx`)
  - Variables: camelCase (`isLoading`)
- **Imports**: Group and order imports logically

### Example Component Structure

```tsx
"use client";

// External imports
import { useState } from "react";
import { motion } from "motion/react";

// UI component imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Icon imports
import { IconMail } from "@tabler/icons-react";

// Utility imports
import { cn } from "@/lib/utils";

export default function ComponentName() {
  // State
  const [value, setValue] = useState("");

  // Handlers
  const handleSubmit = () => {
    // Logic
  };

  // Render
  return (
    <div className="container">
      {/* Component JSX */}
    </div>
  );
}
```

---

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, ensure:

- [ ] Component renders without errors
- [ ] Responsive on mobile, tablet, desktop
- [ ] Works in light and dark mode
- [ ] Keyboard accessible
- [ ] No console warnings/errors
- [ ] Follows design guidelines
- [ ] Documentation is clear

### Browser Testing

Test your component in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

---

## 📚 Documentation

### Component Documentation

Each component should include:

1. **Description**: What the component does
2. **Usage Example**: How to use it
3. **Props**: If applicable
4. **Dependencies**: Required packages
5. **Accessibility Notes**: ARIA labels, keyboard support

### MDX Documentation

Documentation is auto-generated from metadata, but you can enhance it by:
- Adding usage examples
- Including best practices
- Noting common pitfalls

---

## 🌟 Community

### Getting Help

- **GitHub Discussions**: Ask questions and share ideas
- **Issues**: Report bugs or request features
- **Twitter**: Follow [@rayyanquantum](https://twitter.com/rayyanquantum)

### Recognition

Contributors will be:
- Listed in our README
- Mentioned in release notes
- Featured on our website (coming soon)

---

## 📄 License

By contributing to RayUI, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Thank you for contributing to RayUI! Your efforts help make this library better for everyone.

If you have any questions, feel free to:
- Open an issue
- Start a discussion
- Reach out on [Twitter](https://twitter.com/rayyanquantum)

**Happy coding! 🚀**

---

Built with ❤️ by [Rayyan Quantum AI Labs](https://rayyanquantum.ai)