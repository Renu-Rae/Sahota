import renuPhoto from "@/assets/renu-photo.jpeg";
import { Instagram, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="flex items-center justify-end px-6 md:px-12 py-6">
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/raesahota/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/renuraesahota/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </header>

      {/* Hero with Photo */}
      <section className="flex flex-col items-center px-6 pt-8 pb-16">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-border mb-8">
          <img
            src={renuPhoto}
            alt="Renu Rae Sahota"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h1 className="font-script text-2xl md:text-3xl font-light italic tracking-wide text-foreground mt-6 mb-1">
          Renu Rae Sahota
        </h1>
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
          Polymath
        </p>
      </section>

      {/* Bio */}
      <section className="max-w-2xl mx-auto px-6 pb-20 text-center">
        <h2 className="font-script text-4xl md:text-5xl font-light italic text-foreground mb-2">
          Two Worlds,
        </h2>
        <h2 className="font-script text-4xl md:text-5xl font-light italic text-foreground mb-10">
          One Vision
        </h2>
        <p className="font-script text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
          Renu Rae Sahota is a Canadian actress, geoscientist, and multimedia artist whose unique
          career reflects a deep curiosity about both the human experience and the natural world.
          With degrees from the Faculty of Science and Arts from the University of Calgary,
          she brings analytical precision and emotional depth to every role.
        </p>
      </section>

      {/* Featured Reel */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h3 className="font-script text-2xl md:text-3xl font-light italic text-center text-foreground mb-8">
          City of Calgary, Holiday Commercial
        </h3>
        <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://www.youtube.com/embed/hS0vGupi8w0"
            title="City of Calgary Holiday Commercial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Footer with collection links */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h4 className="font-script text-xl md:text-2xl font-light italic text-foreground">
            Art Collections
          </h4>
          <div className="flex items-center gap-8">
            <a
              href="https://opensea.io/collection/renu-x-idiot-machine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide"
            >
              Renu x Idiot Machine — OpenSea
            </a>
            <a
              href="https://objkt.com/collections/KT1AoSRxZYRx8TkB7GmLEmPY3i898TwPU7F5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide"
            >
              Drumheller Starry Nights — objkt
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Renu Rae Sahota. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
