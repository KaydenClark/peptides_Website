import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Research Catalog | Local Prototype",
  description: "A non-public research catalog visual prototype.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
