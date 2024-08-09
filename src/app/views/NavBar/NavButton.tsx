import Bars3 from "@/icons/Bars3";
import XMark from "@/icons/XMark";
import React, { MouseEventHandler } from "react";

interface NavButtonProps {
  isMenuOpen: boolean;
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
}

export default function NavButton(props: NavButtonProps) {
  return (
    <button
      onClick={props.toggleMenu}
      className="text-neutral-300 p-1 hover:text-neutral-50 md:hidden"
    >
      {props.isMenuOpen ? (
        <XMark className="size-6" />
      ) : (
        <Bars3 className="size-6" />
      )}
    </button>
  );
}
