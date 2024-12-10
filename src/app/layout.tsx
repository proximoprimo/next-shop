import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@components/layout/Header";
import MobileMenu from "@components/layout/MobileMenu";

export const metadata: Metadata = {
  title: "NextShop",
  description: "From idea to project",
};

const notoSans = Noto_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "500"],
  variable: "--noto-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>
        <Header />
        {children}
        <MobileMenu />
      </body>
    </html>
  );
}
