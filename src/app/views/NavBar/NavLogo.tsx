import Link from "next/link";
import React from "react";

export default function NavLogo() {
  return (
    <Link href="/" className="font-display text-lg font-black text-neutral-300">
      <span className="lg:hidden">K. </span>
      <span className="hidden lg:inline">KYLE </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-tr from-primary-500 to-accent-500">
        BETTS
      </span>
    </Link>
  );
}
