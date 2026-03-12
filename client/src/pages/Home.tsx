import { useEffect } from "react";
import PersonaSlider from "@/components/PersonaSlider";
import { SocialAside } from "@/components/SocialAside";

export default function Home() {
  useEffect(() => { document.title = "Danrley Pereira | Engenheiro de Software"; }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <PersonaSlider />
      <SocialAside />
    </div>
  );
}
