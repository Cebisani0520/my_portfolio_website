"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/src/constants/links";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`${
            pathname === link.path
              ? "text-accent border-b-2 border-accent"
              : "text-white"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
