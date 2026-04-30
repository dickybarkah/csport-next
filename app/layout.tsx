import type { Metadata } from "next";
import "./globals.css";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  metadataBase: new URL("https://csportcenter.com"),
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.tagline,
    url: "https://csportcenter.com",
    siteName: site.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.tagline,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-white text-(--color-brand-ink)">
        {children}
      </body>
    </html>
  );
}
