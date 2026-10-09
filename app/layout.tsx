import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SnowBackground } from "@/components/ui/snow-background";
import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SnowBackground />
          <CustomCursor />

          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
