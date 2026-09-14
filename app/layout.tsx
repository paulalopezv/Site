import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paula Agustina López Villalba | Economics",
  description:
    "Paula Agustina López Villalba is a Ph.D. candidate in Economics at the University of Michigan, studying how institutions and public policies shape labor supply and household behavior.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
