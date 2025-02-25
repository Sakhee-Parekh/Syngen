import type { Metadata } from "next";
import "material-icons/iconfont/material-icons.css";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Syngen Consulting",
  description: "Syngen Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased tracking-wide`}
        style={{
          fontFamily: "var(--poppins), sans-serif",
        }}
      >
        <Navbar />
        <div className="flex-grow overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
