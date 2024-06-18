import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
const navLinks = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/createPost",
    label: "Create Post",
  },
];
const Header = () => {
  return (
    <header className="flex justify-center text-center items-center py-4 px-7 border-b">
      <nav>
        <ul className="flex gap-x-5 text-[14px] border-3">
          {navLinks.map((links) => (
            <li key={links.href} className=" ">
              <Link
                href={links.href}
                className="text-zinc-600 hover:underline hover:text-black "
              >
                {links.label}
              </Link>
            </li>
          ))}
          <li>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-[35px] w-[35px]",
                },
              }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
