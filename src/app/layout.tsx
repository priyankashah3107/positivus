import type { Metadata } from "next";
import { Inter, Space_Grotesk  } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({subsets: ["latin"]})
export const metadata: Metadata = {
  title: "Positivus",
  description: "Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
