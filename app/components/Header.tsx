"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "../data/site";
import { CompassMark } from "./CompassMark";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Xia Yizhou home">
        <CompassMark />
        <span>LIGHTSEEKER</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link aria-current={active ? "page" : undefined} className={active ? "active" : ""} href={item.href} key={item.href}>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <button className="icon-button" aria-label="Open navigation menu">
        <Menu size={19} />
      </button>
    </header>
  );
}
