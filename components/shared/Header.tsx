'use client'

import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Home style header
  const isHomePage =
    pathname === "/" || pathname === "/home" || pathname === "/donate";

  const linkColor = isHomePage ? "text-white" : "text-black";

  // Active route check
  const isActive = (path: string) => pathname === path;

  // Reusable Nav Item
  const NavItem = ({
    label,
    path,
  }: {
    label: string;
    path: string;
  }) => (
    <div
      onClick={() => router.push(path)}
      className={`relative font-semibold cursor-pointer ${linkColor}`}
    >
      {label}

      {isActive(path) && (
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-6 h-[3px] bg-yellow-400 rounded-full" />
      )}
    </div>
  );

  return (
    <div
      className={`absolute top-0 w-full z-50 grid grid-cols-8 items-center py-8 ${
        isHomePage ? "text-white" : "text-black"
      }`}
    >
      {/* LEFT GUTTER */}
      <div className="col-span-1" />

      {/* MAIN NAV */}
      <div className="col-span-6 flex justify-between items-center">
        {/* LOGO */}
        <img
          onClick={() => router.push("/")}
          src="/assets/images/logo.png"
          className="h-[90px] cursor-pointer"
          alt="Logo"
        />

        {/* NAV ITEMS */}
        <NavItem label="Home" path="/" />
        <NavItem label="Maai" path="/maii" />
        <NavItem label="About Us" path="/about" />
        <NavItem label="Gallery" path="/gallery" />
        <NavItem label="Contact Us" path="/contact" />
        <NavItem label="Policy" path="/policy" />

        {/* DONATE BUTTON */}
        <Button
          onClick={() => router.push("/donate")}
          className="bg-yellow-300 rounded-full text-xl text-black px-8 py-6 hover:bg-yellow-400"
        >
          Donate Us
        </Button>
      </div>

      {/* RIGHT GUTTER */}
      <div className="col-span-1" />
    </div>
  );
};

export default Header;
