// https://github.com/shadcn-ui/alpine-registry/blob/main/components/registry-setup.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCopyToClipboard } from "@/hooks/use-copy";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon, TerminalIcon, CommandIcon } from "lucide-react";
import * as React from "react";
import { motion } from "motion/react";

export function RegistrySetup({
  className,
}: React.ComponentProps<typeof Button>) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(className, "rounded-full gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all")}
        >
          <CommandIcon className="size-4" />
          <span>Setup Registry</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-3xl p-0 overflow-hidden border-primary/10 bg-background/95 backdrop-blur-xl">
        <div className="p-6 border-b border-border/40 bg-muted/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Setup Registry</DialogTitle>
            <DialogDescription className="text-base">
              Configure your project to use the RayUI registry.
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Step 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">1</div>
              <h3 className="font-semibold text-lg">Configure components.json</h3>
            </div>
            <p className="text-sm text-muted-foreground pl-11">
              Add the registry URL to your <code className="text-primary font-mono text-xs bg-primary/5 px-1.5 py-0.5 rounded border border-primary/10">components.json</code> file.
            </p>
            
            <div className="pl-11">
              <div className="relative group rounded-xl border border-border/50 bg-zinc-950 dark:bg-zinc-900 shadow-sm overflow-hidden">
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800"
                    onClick={() => copyToClipboard(registrySetupCode)}
                  >
                    {isCopied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm font-mono text-zinc-100">
                    <code>{registrySetupCode}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">2</div>
              <h3 className="font-semibold text-lg">Add Components</h3>
            </div>
            <p className="text-sm text-muted-foreground pl-11">
              Use the CLI to add components to your project.
            </p>
            
            <div className="pl-11">
              <div className="rounded-xl border border-border/50 bg-muted/30 p-4 font-mono text-sm flex items-center gap-3 text-muted-foreground">
                <TerminalIcon className="h-4 w-4 shrink-0" />
                <span>npx shadcn@latest add @rayui/[component-name]</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">3</div>
              <h3 className="font-semibold text-lg">MCP Server (Optional)</h3>
            </div>
            
            <div className="pl-11">
              <div className="rounded-xl border border-border/50 bg-muted/30 p-4 font-mono text-sm flex items-center gap-3 text-muted-foreground">
                <TerminalIcon className="h-4 w-4 shrink-0" />
                <span>npx shadcn@latest mcp init</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const registrySetupCode = `"registries": {
  "@rayui": "https://rayui.so/r/{name}.json"
}
`;
