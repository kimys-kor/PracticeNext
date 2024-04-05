"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  console.log(path);

  return (
    <nav>
      <ul>
        <li>
          <Link prefetch href="/">
            Home
          </Link>{" "}
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link prefetch href="/about-us">
            About Us
          </Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
