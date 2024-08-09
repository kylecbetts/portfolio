import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MouseEventHandler } from "react";

interface NavLink {
  id: string;
  label: string;
  url: string;
}

const links: NavLink[] = [
  {
    id: "home",
    label: "HOME",
    url: "/",
  },
  {
    id: "software",
    label: "SOFTWARE",
    url: "/software",
  },
  {
    id: "hockey",
    label: "HOCKEY",
    url: "/hockey",
  },
  {
    id: "connect",
    label: "CONNECT",
    url: "/connect",
  },
];

interface NavLinksProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLinks(props: NavLinksProps) {
  const pathname = usePathname();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (props.onClick) {
      props.onClick(event);
    }
    return true;
  }

  return (
    <>
      {links.map((link, index) => (
        <li key={link.id}>
          <Link
            className={`font-display text-base md:text-sm font-medium ${
              pathname === link.url
                ? "text-transparent bg-clip-text bg-gradient-to-tr from-primary-500 to-accent-500"
                : "text-neutral-300 hover:text-neutral-50 hover:font-bold"
            }`}
            onClick={handleClick}
            href={link.url}
          >
            0{index}. {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
