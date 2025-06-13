import type { Metadata } from "next";
import "./globals.css";
import { myFont } from './fonts'

export const metadata: Metadata = {
  title: "EIS MSD",
  description: "EIS MSD",
  icons: [
    {
      rel: "icon",
      url: "eis/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "eis/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={myFont.className}
      >
        {children}
      </body>
    </html>
  );
}
