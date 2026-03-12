import linksData from "@/data/links.json";

export function SocialAside() {
  return (
    <aside
      aria-label="Redes sociais"
      className="fixed right-0 top-0 h-screen z-50 flex flex-col items-center justify-center gap-4 p-3"
      style={{ borderLeft: "3px dashed black" }}
    >
      {linksData.social.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-12 h-12 hover:opacity-70 transition-opacity"
          />
        </a>
      ))}
    </aside>
  );
}
