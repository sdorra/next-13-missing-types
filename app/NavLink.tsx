"use client";

import { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  href: string;
  exact?: boolean;
  children: ReactNode;
};

const NavLink: FC<Props> = ({ href, children, exact = true }) => {
  const path = usePathname();
  
  const isActive = exact
    ? href === path
    : path.startsWith(href);

  return (
    <Link href={href} className={isActive ? "underline" : undefined}>
      {children}
    </Link>
  );
};

export default NavLink;
