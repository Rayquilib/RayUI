import { siteConfig } from "@/config";
import { 
  IconBrandGithub, 
  IconBrandTwitter, 
  IconBrandDiscord, 
} from "@tabler/icons-react";
import Link from "next/link";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 py-12 md:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/rayui-blue-without-bg.png" 
                alt="RAYUI Logo" 
                width={36} 
                height={36}
                className="h-9 w-9"
              />
              <span className="text-3xl font-bold tracking-tight font-[family-name:var(--font-outfit)]">RAYUI</span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              A modern UI component library for React. Build beautiful applications faster with 60+ production-ready components.
            </p>
            <div className="flex space-x-6">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <IconBrandGithub className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <IconBrandTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://discord.gg/rayui"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Discord</span>
                <IconBrandDiscord className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/blocks" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Components
                    </Link>
                  </li>
                  <li>
                    <Link href="/templates" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Documentation
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/blog" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/changelog" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Changelog
                    </Link>
                  </li>
                  <li>
                    <Link href="/showcase" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Showcase
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/license" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      License
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border/40 pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Rayyan Quantum AI Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
