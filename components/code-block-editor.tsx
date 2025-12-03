"use client";

import { cn } from "@/lib/utils";
import { Check, ChevronRight, Clipboard } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { highlightCode } from "@/lib/highlight-code";
import { resolveTheme } from "@/lib/resolve-theme";
import {
  IconFile,
  IconFileTypeTs,
  IconFileTypeTsx,
  IconFolder,
  IconFolderOpen,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

type FileItem = {
  name: string;
  path: string;
  content?: string;
  type: "file";
};

export type FolderItem = {
  name: string;
  path: string;
  type: "folder";
  children: FileTreeItem[];
};

export type FileTreeItem = FileItem | FolderItem;

type CodeBlockEditorContext = {
  activeFile: string | null;
  setActiveFile: (file: string) => void;
  fileTree: FileTreeItem[];
  expandedFolders: Set<string>;
  toggleFolder: (path: string) => void;
  blockTitle?: string;
};

const CodeBlockEditorContext =
  React.createContext<CodeBlockEditorContext | null>(null);

function useCodeBlockEditor() {
  const context = React.useContext(CodeBlockEditorContext);
  if (!context) {
    throw new Error(
      "useCodeBlockEditor must be used within a CodeBlockEditorProvider"
    );
  }
  return context;
}

function CodeBlockEditorProvider({
  children,
  fileTree,
  blockTitle,
}: {
  children: React.ReactNode;
  fileTree: FileTreeItem[];
  blockTitle?: string;
}) {
  const [activeFile, setActiveFile] = React.useState<string | null>(
    findFirstFile(fileTree)?.path || null
  );
  const [expandedFolders, setExpandedFolders] = React.useState<Set<string>>(
    () => {
      const expanded = new Set<string>();
      const addFirstLevelFolders = (items: FileTreeItem[]) => {
        items.forEach((item) => {
          if (item.type === "folder" && !item.path.includes("/")) {
            expanded.add(item.path);
          }
        });
      };
      addFirstLevelFolders(fileTree);
      return expanded;
    }
  );

  const toggleFolder = React.useCallback((path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  }, []);

  return (
    <CodeBlockEditorContext.Provider
      value={{
        activeFile,
        setActiveFile,
        fileTree,
        expandedFolders,
        toggleFolder,
        blockTitle,
      }}
    >
      <div className="flex min-w-0 flex-col items-stretch rounded-lg border">
        {children}
      </div>
    </CodeBlockEditorContext.Provider>
  );
}

function findFirstFile(items: FileTreeItem[]): FileItem | null {
  for (const item of items) {
    if (item.type === "file") {
      return item;
    } else if (item.type === "folder") {
      const file = findFirstFile(item.children);
      if (file) return file;
    }
  }
  return null;
}

function findFileByPath(items: FileTreeItem[], path: string): FileItem | null {
  for (const item of items) {
    if (item.type === "file" && item.path === path) {
      return item;
    } else if (item.type === "folder") {
      const file = findFileByPath(item.children, path);
      if (file) return file;
    }
  }
  return null;
}

function getFileIcon(filename: string) {
  if (filename.endsWith(".tsx")) return IconFileTypeTsx;
  if (filename.endsWith(".ts")) return IconFileTypeTs;
  return IconFile;
}

function CodeBlockEditorToolbar() {
  const { activeFile, fileTree, blockTitle } = useCodeBlockEditor();
  const [isCopied, setIsCopied] = React.useState(false);

  const file = activeFile ? findFileByPath(fileTree, activeFile) : null;
  const content = file?.content || "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex h-10 items-center gap-2 border-b px-4 text-sm">
      <div className="flex items-center gap-2 tracking-tight font-medium">
        {blockTitle || "Code Block"}
      </div>
      <div className="ml-auto flex items-center gap-2 text-muted-foreground">
        {file && (
          <>
            {React.createElement(getFileIcon(file.name), {
              className: "h-4 w-4",
            })}
            <span>{file.path}</span>
          </>
        )}
        <Button
          onClick={copyToClipboard}
          className="h-7 w-7 rounded-md p-0"
          variant="ghost"
          size="sm"
          disabled={!file}
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Clipboard className="h-4 w-4" />
          )}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
    </div>
  );
}

function FileTreeView() {
  const { fileTree, expandedFolders } = useCodeBlockEditor();

  const renderableTree = React.useMemo(() => {
    const itemMap = new Map<
      string,
      FileTreeItem & { depth: number; visible: boolean }
    >();

    const addToMap = (
      items: FileTreeItem[],
      depth: number,
      parentVisible = true
    ) => {
      items.forEach((item) => {
        const isVisible =
          parentVisible &&
          (item.type === "folder" ||
            (item.type === "file" &&
              (!item.path.includes("/") ||
                expandedFolders.has(
                  item.path.substring(0, item.path.lastIndexOf("/"))
                ))));

        itemMap.set(item.path, { ...item, depth, visible: isVisible });

        if (item.type === "folder") {
          const folderVisible = isVisible && expandedFolders.has(item.path);
          addToMap(item.children, depth + 1, folderVisible);
        }
      });
    };

    addToMap(fileTree, 0);

    return Array.from(itemMap.values()).filter((item) => item.visible);
  }, [fileTree, expandedFolders]);

  return (
    <SidebarProvider className="flex min-h-full! flex-col">
      <Sidebar
        collapsible="none"
        className="w-full flex-1 border-r bg-muted/50"
      >
        <SidebarContent>
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <div className="flex flex-col gap-0.5 rounded-none">
                {renderableTree.map((item) => (
                  <TreeItem key={item.path} item={item} depth={item.depth} />
                ))}
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}

function TreeItem({ item, depth }: { item: FileTreeItem; depth: number }) {
  const { activeFile, setActiveFile, expandedFolders, toggleFolder } =
    useCodeBlockEditor();
  const isExpanded = item.type === "folder" && expandedFolders.has(item.path);

  const handleClick = () => {
    if (item.type === "file") {
      setActiveFile(item.path);
    } else {
      toggleFolder(item.path);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex w-full items-center gap-2 whitespace-nowrap py-1.5 text-left text-sm hover:bg-muted",
        "pl-[calc(0.5rem+0.8rem*var(--depth))]",
        item.type === "file" &&
          item.path === activeFile &&
          "bg-muted font-medium"
      )}
      style={{ "--depth": depth } as React.CSSProperties}
    >
      {item.type === "folder" ? (
        <>
          <ChevronRight
            className={cn(
              "h-4 w-4 shrink-0 transition-transform",
              isExpanded && "rotate-90"
            )}
          />
          {isExpanded ? (
            <IconFolderOpen className="h-4 w-4 shrink-0" />
          ) : (
            <IconFolder className="h-4 w-4 shrink-0" />
          )}

          <span className="font-medium truncate">{item.name}</span>
        </>
      ) : (
        <>
          <span className="w-4" />
          {React.createElement(getFileIcon(item.name), {
            className: "h-4 w-4 shrink-0",
          })}
          <span className="truncate">{item.name}</span>
        </>
      )}
    </button>
  );
}

function CodeView() {
  const { activeFile, fileTree } = useCodeBlockEditor();
  const [highlightedCode, setHighlightedCode] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);
  const { theme } = useTheme();

  const file = activeFile ? findFileByPath(fileTree, activeFile) : null;
  const content = file?.content || "";

  React.useEffect(() => {
    async function highlight() {
      if (!file) {
        setHighlightedCode("");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const extension = file.path.split(".").pop() || "";
        let lang = "typescript";

        if (extension === "css") lang = "css";
        else if (extension === "html") lang = "html";
        else if (extension === "js") lang = "javascript";
        else if (extension === "jsx") lang = "jsx";
        else if (extension === "tsx") lang = "tsx";

        const html = await highlightCode(content, resolveTheme(theme), lang);

        setHighlightedCode(html);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre>${content}</pre>`);
      } finally {
        setIsLoading(false);
      }
    }

    highlight();
  }, [file, content, theme]);

  if (!file) {
    return <div className="p-4">Select a file to view its content</div>;
  }

  if (isLoading) {
    return <div className="p-4">Loading syntax highlighting...</div>;
  }

  return (
    <div className="flex min-w-0 flex-1 flex-col code-block-editor-view h-full">
      <ScrollArea className="h-full w-full bg-muted/30 rounded-l-none! rounded-tr-none!">
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

export interface CodeBlockEditorProps {
  fileTree: FileTreeItem[];
  blockTitle?: string;
  height?: string;
}

export function buildFileTree(paths: string[]): FileTreeItem[] {
  const root: { [key: string]: any } = {};

  paths.forEach((path) => {
    const parts = path.split("/").filter(Boolean);
    let current = root;
    let currentPath = "";

    parts.forEach((part, index) => {
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      const isFile = index === parts.length - 1;

      if (!current[part]) {
        current[part] = {
          name: part,
          path: currentPath,
          type: isFile ? "file" : "folder",
          ...(isFile
            ? { content: `// Content for ${currentPath}` }
            : { children: {} }),
        };
      }

      if (!isFile && current[part].type === "folder") {
        current = current[part].children;
      }
    });
  });

  const convertToArray = (obj: any, parentPath = ""): FileTreeItem[] => {
    return Object.values(obj)
      .map((node: any) => {
        if (node.type === "folder" && node.children) {
          return {
            ...node,
            children: convertToArray(node.children, node.path),
          };
        }
        return node;
      })
      .sort((a: FileTreeItem, b: FileTreeItem) => {
        if (a.type !== b.type) {
          return a.type === "folder" ? -1 : 1;
        }

        return a.name.localeCompare(b.name);
      });
  };

  return convertToArray(root);
}

export function CodeBlockEditor({
  fileTree,
  blockTitle,
  height = "700px",
}: CodeBlockEditorProps) {
  if (!fileTree || fileTree.length === 0) {
    return (
      <div className="rounded-lg border p-4 text-muted-foreground">
        No files to display
      </div>
    );
  }

  const sortedFileTree = React.useMemo(() => {
    const sortTree = (items: FileTreeItem[]): FileTreeItem[] => {
      return [...items]
        .sort((a, b) => {
          if (a.type !== b.type) {
            return a.type === "folder" ? -1 : 1;
          }
          return a.name.localeCompare(b.name);
        })
        .map((item) => {
          if (item.type === "folder" && item.children) {
            return { ...item, children: sortTree(item.children) };
          }
          return item;
        });
    };
    return sortTree(fileTree);
  }, [fileTree]);

  return (
    <CodeBlockEditorProvider fileTree={sortedFileTree} blockTitle={blockTitle}>
      <CodeBlockEditorToolbar />

      <div className="flex w-full overflow-hidden" style={{ height }}>
        <div className="w-[240px] shrink-0 border-r">
          <FileTreeView />
        </div>
        <div className="flex-1 min-w-0">
          <CodeView />
        </div>
      </div>
    </CodeBlockEditorProvider>
  );
}
