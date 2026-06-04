import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xia Yizhou Birthday Archive",
  description: "A birthday edition Lightseeker Navy archive for Xia Yizhou."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
