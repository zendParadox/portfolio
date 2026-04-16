import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/smooth-scroll";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Syne, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const fontSans = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black",
          fontSans.variable,
          fontJp.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <SmoothScroll>
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
