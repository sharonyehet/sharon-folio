import { ViewProvider } from "@/contexts/ViewContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import Header from "./components/header-section/Header";
import "./globals.css";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharon — Software Developer",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
