"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { highlightCode } from "@/lib/highlight-code";
import { resolveTheme } from "@/lib/resolve-theme";

interface SingleFileCodeViewProps {
  code: string;
  language?: string;
}

export function SingleFileCodeView({
  code,
  language = "tsx",
}: SingleFileCodeViewProps) {
  const [highlightedCode, setHighlightedCode] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);
  const { theme } = useTheme();

  React.useEffect(() => {
    async function highlight() {
      setIsLoading(true);
      try {
        const html = await highlightCode(
          code,
          resolveTheme(theme),
          language
        );
        setHighlightedCode(html);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre>${code}</pre>`);
      } finally {
        setIsLoading(false);
      }
    }

    highlight();
  }, [code, theme, language]);

  if (isLoading) {
    return <div className="p-4">Loading syntax highlighting...</div>;
  }

  return (
    <div className="flex min-w-0 flex-1 flex-col single-file-code-view h-full">
      <ScrollArea className="h-full w-full">
        <div
          className="p-4 text-base min-w-max"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
        <ScrollBar orientation="horizontal" />
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
