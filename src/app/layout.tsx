import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
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
          className="h-screen px-[5%] xs:px-[20%] xl:px-[10%] xxl:px-[12%] flex  pt-8 font-inter text-black bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68] overflow-hidden"
        >
          <Toaster position="top-center" richColors />
          {children}
        </body>
      </html>
    </Providers>
  );
}
