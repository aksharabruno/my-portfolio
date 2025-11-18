import type { Metadata } from "next";
import { M_PLUS_Code_Latin, Doto } from "next/font/google";
import "./globals.css";

const mPlusCodeLatin = M_PLUS_Code_Latin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-mplus-code-latin",
});

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto-latin",
});

export const metadata: Metadata = {
  title: "aksharabruno",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mPlusCodeLatin.variable} `}>{children}</body>
    </html>
  );
}
