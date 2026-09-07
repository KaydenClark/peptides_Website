import type { Metadata } from "next";
import "./globals.css";

import { InquiryListProvider } from "@/components/inquiry-list-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: { default: "Peptide Method", template: "%s · Peptide Method" },
  description:
    "A private, informational research-material catalog. Browsing and inquiries are informational only and are not orders or offers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <InquiryListProvider>
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </InquiryListProvider>
      </body>
    </html>
  );
}
