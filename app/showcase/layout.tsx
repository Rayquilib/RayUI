import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ShowcaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
}
