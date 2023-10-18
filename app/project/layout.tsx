"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <header className="w-full bg-background-layer-1  flex justify-center shadow items-center">
        <nav className="bg-black-200 flex gap-4 items-center m-3.5 rounded-sm text-center  text-primary">
          <Link
            href="/project"
            className={`px-3 py-2 m-1 ${
              pathname.includes("/project?filter=me") ||
              pathname.includes("/project/create")
                ? ""
                : "bg-accent-secondary text-accent-primary rounded-[6px] m-1"
            }`}
          >
            Projects
          </Link>

          <Link
            href="/project/create"
            className={`px-3 py-2 m-1 ${
              pathname.includes("/project/create")
                ? "bg-accent-secondary text-accent-primary rounded-sm"
                : ""
            }`}
          >
            Create Project
          </Link>
        </nav>
      </header>
      <main className="flex justify-center items-center">{children}</main>
    </div>
  );
}
