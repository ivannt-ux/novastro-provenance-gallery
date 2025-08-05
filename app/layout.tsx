import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "Novastro Provenance Gallery",
  description: "Track evolving real-world assets with Novastro on NEAR.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
