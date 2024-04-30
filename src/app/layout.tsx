import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apollo",
  description: "Better Foot Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script 
      async 
      src="https://www.googletagmanager.com/gtag/js?id=G-MY5E9T95GM"
      ></Script>
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-MY5E9T95GM');
          `}
      </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
