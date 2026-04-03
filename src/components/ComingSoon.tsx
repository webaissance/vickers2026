import { useComingSoon } from "@/hooks/useFilmFeed";
import { getComingSoonDateLabel } from "@/lib/filmFeed";

const ComingSoon = () => {
  const { data: films, isLoading } = useComingSoon();

  if (isLoading || films.length === 0) return null;

  return (
    <section id="coming-soon" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold gold-text-gradient mb-3">
            Coming Soon
          </h2>
          <div className="mt-4 mx-auto w-24 h-px bg-primary/40" />
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {films.map((film, i) => (
            <a
              key={film.eventId}
              href={film.movieLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg opacity-0 animate-fade-in block"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={film.poster}
                alt={film.title}
                className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Title overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-3 pt-10">
                <h3 className="font-heading text-sm md:text-base font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {film.title}
                </h3>
                <p className="text-[10px] md:text-xs text-primary/80 font-body tracking-wide mt-1">
                  {getComingSoonDateLabel(film)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
