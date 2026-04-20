import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Pulse - 全球AI脉搏",
  description: "追踪全球顶尖AI大厂动态、热门开源项目与技术沙龙",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
