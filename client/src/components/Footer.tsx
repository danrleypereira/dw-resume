import { OWNER } from "@/data/social";

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-8">
      <div className="container text-center text-foreground/60 text-sm">
        <p>&copy; {new Date().getFullYear()} {OWNER.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
