import "../styles/globals.css";
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
        {/* Responsive, sharp container */}
        <main>
          <div className="w-full max-w-3xl mx-auto relative z-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}