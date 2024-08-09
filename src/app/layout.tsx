import type { Metadata } from "next";
import { Orbitron, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./views/NavBar/NavBar";

export const metadata: Metadata = {
  title: "Kyle Betts",
  description:
    "Kyle Betts' portfolio website showcasing software development skills and unique professional hockey background.",
};

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${orbitron.className} ${roboto.className} ${robotoMono.className} scroll-smooth`}
      lang="en"
    >
      <body className="bg-neutral-900">
        <NavBar />
        <main className="min-h-screen pt-12">{children}</main>
      </body>
    </html>
  );
}
