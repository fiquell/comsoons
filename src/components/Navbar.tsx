import { navLinks } from "@/constants";
import { Links } from "@/types";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(function () {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return function () {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function toggle() {
    setMenuOpen(!menuOpen);
  }

  function renderNavLinks(links: Links[]) {
    return links.map(function (item) {
      return (
        <Link
          key={item.label}
          to={item.url}
          replace={true}
          onClick={toggle}
          className="px-4 py-2 font-medium md:p-0">
          {item.label}
        </Link>
      );
    });
  }

  return (
    <nav className="container absolute z-50 w-full">
      <div className="flex items-center justify-between">
        <div ref={menuRef} className="relative md:hidden">
          <button type="button" onClick={toggle} className="text-3xl">
            <span className="sr-only">Menu</span>
            <Icon icon="line-md:align-left" />
          </button>
          {menuOpen && (
            <div className="absolute ml-2 w-56 rounded-md bg-neutral-50 shadow-md">
              <div className="flex flex-col gap-2 p-2">
                {renderNavLinks(navLinks)}
              </div>
            </div>
          )}
        </div>
        <div className="hidden md:block">
          <div className="flex gap-2">{renderNavLinks(navLinks)}</div>
        </div>
        <p className="font-medium">16 Days left</p>
      </div>
    </nav>
  );
}
