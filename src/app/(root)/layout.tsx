import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/navbar/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {<Navbar />}
        <div>{children}</div>
      </body>
    </html>
  );
}
