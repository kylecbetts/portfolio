import type { Metadata } from "next";
import { Orbitron, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
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
      className={`${orbitron.className} ${roboto.className} ${robotoMono.className}`}
      lang="en"
    >
      <body></body>
    </html>
  );
}
