import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-(--breakpoint-xl) flex-1 px-8">
          <div className="min-h-[calc(100%-2rem)] w-full pt-10 pb-20">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
