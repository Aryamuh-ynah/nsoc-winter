import { ThemeProvider } from "@/components/theme-provider";
import { BackToTop } from "@/components/ui/back-to-top";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SnowBackground } from "@/components/ui/snow-background";
import type { Metadata } from "next";
import { Black_Ops_One, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-black-ops",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NSoC'26 Winter Edition",
  description: "Nexus Spring of Code — Winter Edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${blackOpsOne.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SnowBackground />
          <CustomCursor />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
