import { Button } from "@/components/ui/button";
import { CubeLink } from "@/components/CubeLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentPage?: "home" | "about" | "projects";
}

export function Navbar({ currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    ...(currentPage !== "home" ? [{ href: "/", label: "Home" }] : []),
    { href: "/about", label: "Sobre" },
    { href: "/projects", label: "Projetos" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <CubeLink href="/" className="text-2xl font-bold text-primary">
          DW
        </CubeLink>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) =>
            link.anchor ? (
              <a key={link.href} href={link.href} className="link-underline text-sm font-medium hover:text-primary">
                {link.label}
              </a>
            ) : (
              <CubeLink key={link.href} href={link.href} className="link-underline text-sm font-medium hover:text-primary">
                {link.label}
              </CubeLink>
            )
          )}
          <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((link) =>
              link.anchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-primary py-2"
                >
                  {link.label}
                </a>
              ) : (
                <CubeLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-primary py-2"
                >
                  {link.label}
                </CubeLink>
              )
            )}
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 w-fit" asChild>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
