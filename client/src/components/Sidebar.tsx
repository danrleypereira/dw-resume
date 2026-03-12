import { useState, useCallback, useEffect, useRef } from "react";
import { CubeLink } from "@/components/CubeLink";
import linksData from "@/data/links.json";

const SOCIAL_ICON_MAP: Record<string, string> = {
  GitHub: "/social-midias/github.svg",
  LinkedIn: "/social-midias/linkedin.svg",
  Instagram: "/social-midias/instagram.svg",
  Facebook: "/social-midias/facebook.svg",
};

const MOBILE_BREAKPOINT = 991.98;

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleInternalClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav
      ref={sidebarRef}
      className="fixed left-0 top-0 h-screen z-50 bg-white flex flex-col transition-all duration-300 overflow-hidden"
      style={{
        width: isOpen
          ? isMobile
            ? "70vw"
            : "20vw"
          : "70px",
        borderRight: isOpen ? "3px dashed black" : "none",
      }}
      onMouseEnter={isMobile ? undefined : open}
      onMouseLeave={isMobile ? undefined : close}
    >
      {/* Hamburger / Toggle area */}
      <div className="flex items-center justify-center min-h-[70px] shrink-0">
        <button
          onClick={isMobile ? handleToggle : undefined}
          className="p-3 cursor-pointer"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          <img
            src="/navigation/three-parallel-lines.svg"
            alt="Menu"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Content visible only when open */}
      {isOpen && (
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Profile section */}
          <div className="flex flex-col items-center px-4 pb-4 border-b border-dashed border-gray-400">
            <img
              src={linksData.profile.photo}
              alt={linksData.owner.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
            <span className="mt-2 text-sm font-semibold text-center text-black">
              {linksData.owner.name}
            </span>
          </div>

          {/* Navigation links */}
          <ul className="flex flex-col mt-2">
            {linksData.navigation.map((link) => {
              const inner = (
                <span className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors">
                  <img
                    src={link.icon}
                    alt=""
                    className="shrink-0"
                    style={{ width: 52, height: 52 }}
                  />
                  <span className="text-sm font-medium text-black whitespace-nowrap">
                    {link.label}
                  </span>
                </span>
              );

              return (
                <li key={link.href} className="border-b border-gray-200">
                  {link.type === "internal" ? (
                    <CubeLink
                      href={link.href}
                      onClick={handleInternalClick}
                      className="block"
                    >
                      {inner}
                    </CubeLink>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {inner}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Social media icons */}
          <div className="flex items-center justify-center gap-4 px-4 py-4 border-t border-gray-200">
            {linksData.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img
                  src={SOCIAL_ICON_MAP[social.name] ?? ""}
                  alt={social.name}
                  className="w-6 h-6 hover:opacity-70 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
