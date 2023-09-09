import { navLinks } from "@/constants";
import { Links } from "@/types";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
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

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function renderNavLinks(links: Links[]) {
    return links.map(function (item) {
      return (
        <Link
          key={item.label}
          to={item.url}
          replace={true}
          onClick={toggleMenu}
          className="px-5 py-3 font-medium md:p-0">
          {item.label}
        </Link>
      );
    });
  }

  return (
    <>
      <nav className="container absolute left-0 right-0 top-0 z-50 w-full">
        <div className="flex items-center justify-between">
          <div ref={menuRef} className="relative md:hidden">
            <button type="button" onClick={toggleMenu} className="text-3xl">
              <span className="sr-only">Menu</span>
              <Icon icon="line-md:align-left" />
            </button>
            {menuOpen && (
              <div className="absolute w-60 rounded-md bg-neutral-50 shadow-md">
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
      <main className="container">
        <Outlet />
      </main>
      <footer className="mt-32 pb-1 text-center">
        <p>Website by Object Society's</p>
        <p>
          &copy; Object Society's {new Date().getFullYear()}. All Right
          Reserved.
        </p>
      </footer>
    </>
  );
}
