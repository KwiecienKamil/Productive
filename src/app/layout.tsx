import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./services/state/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          data-theme="emerald"
          className="h-screen px-[15%] flex justify-between pt-8 font-inter text-black bg-[#F1CC7B]"
        >
          {children}
        </body>
      </html>
    </Providers>
  );
}
