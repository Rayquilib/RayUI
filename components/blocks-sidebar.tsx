"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { rayuiCategoriesMetadata } from "@/content/blocks-categories";
import { rayuiMetadata } from "@/content/blocks-metadata";
import { 
  IconLayoutGrid, 
  IconLogin, 
  IconTable, 
  IconLayoutSidebar, 
  IconChartBar, 
  IconUpload, 
  IconForms,
  IconSparkles,
  IconMessage,
  IconX,
  IconMenu2,
  IconArrowRight
} from "@tabler/icons-react";
import { useState, useMemo } from "react";

const categoryIcons: Record<string, any> = {
  "dialogs": IconMessage,
  "file-upload": IconUpload,
  "form-layout": IconForms,
  "grid-list": IconLayoutGrid,
  "login": IconLogin,
  "stats": IconChartBar,
  "sidebar": IconLayoutSidebar,
  "ai": IconSparkles,
  "tables": IconTable,
};

export function BlocksSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const groupedComponents = useMemo(() => {
    return rayuiCategoriesMetadata.map(category => ({
      ...category,
      components: rayuiMetadata.filter(item => item.category === category.id)
    }));
  }, []);

  const SidebarContent = () => (
    <div className="space-y-6 p-6 pb-20">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Components
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {rayuiMetadata.length}+ components available
            </p>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <IconX className="h-5 w-5" />
          </button>
        </div>
      </div>

      <nav className="space-y-8">
        {groupedComponents.map((category) => {
          const isCategoryActive = pathname === `/blocks/${category.id}`;
          
          return (
            <div key={category.id} className="space-y-3">
              <div className="px-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-0.5">
                {category.components.map((component) => (
                  <Link
                    key={component.id}
                    href={`/blocks/${category.id}#${component.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "group flex items-center justify-between rounded-md px-2 py-2 text-sm transition-all hover:bg-muted/60",
                      // Highlight if we are on this category page (hash tracking would be ideal but complex for SSR)
                      isCategoryActive 
                        ? "text-foreground hover:text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    title={component.name}
                  >
                    <span className="line-clamp-1">{component.name}</span>
                    {isCategoryActive && (
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </nav>

      <div className="mt-8 rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 to-primary/10 p-5 shadow-sm">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
              <IconLayoutGrid className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-sm font-bold">Need Help?</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Check out our documentation to learn how to install and use these components.
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all"
          >
            <span>View Documentation</span>
            <IconArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
      >
        <IconMenu2 className="h-5 w-5" />
        <span>Components</span>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "lg:hidden fixed top-0 left-0 z-50 h-full w-80 bg-background border-r border-border/40 transform transition-transform duration-300 overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block sticky top-20 h-[calc(100vh-5rem)] w-72 shrink-0 overflow-y-auto border-r border-border/40 bg-background/50 backdrop-blur-sm scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent pb-10">
        <SidebarContent />
      </aside>
    </>
  );
}
