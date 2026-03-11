import { Button } from "@/components/ui/button";
import { CubeLink } from "@/components/CubeLink";

interface NavbarProps {
  currentPage?: "home" | "about" | "projects";
}

export function Navbar({ currentPage }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <CubeLink href="/" className="text-2xl font-bold text-primary">
          DW
        </CubeLink>
        <div className="flex gap-8 items-center">
          {currentPage !== "home" && (
            <CubeLink href="/" className="link-underline text-sm font-medium hover:text-primary">
              Home
            </CubeLink>
          )}
          <CubeLink href="/about" className="link-underline text-sm font-medium hover:text-primary">
            Sobre
          </CubeLink>
          <CubeLink href="/projects" className="link-underline text-sm font-medium hover:text-primary">
            Projetos
          </CubeLink>
          {currentPage === "home" && (
            <a href="#contact" className="link-underline text-sm font-medium hover:text-primary">
              Contato
            </a>
          )}
          <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
