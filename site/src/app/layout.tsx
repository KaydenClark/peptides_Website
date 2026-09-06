import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Research Catalog",
  description: "A non-public research catalog for internal visual validation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
