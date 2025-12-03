"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { RegistrySetup } from "./registry-setup";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/config";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-8">
        <Link className="flex items-center space-x-2 group" href="/">
           <motion.div
             whileHover={{ rotate: 10, scale: 1.1 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }}
           >
              <Image 
                src="/rayui-blue-without-bg.png" 
                alt="RAYUI Logo" 
                width={36} 
                height={36}
                className="h-9 w-9"
              />
           </motion.div>
          <span className="font-bold text-3xl font-[family-name:var(--font-outfit)] tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:to-primary transition-all duration-300">
            RAYUI
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-1">
            {["Components", "Docs"].map((item) => (
              <Link 
                key={item}
                href={item === "Components" ? "/blocks" : `/${item.toLowerCase()}`} 
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {item}
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <RegistrySetup />

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "hidden sm:flex items-center gap-2 rounded-full px-4 h-9 text-sm font-medium border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all"
              )}
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                className="size-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>Star on GitHub</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
