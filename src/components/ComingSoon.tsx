import { Link } from "react-router-dom";
import { useComingSoon } from "@/hooks/useFilmFeed";
import { getComingSoonDateLabel, slugify } from "@/lib/filmFeed";
import comingSoonBanner from "@/assets/coming-soon.png";

const ComingSoon = () => {
  const { data: films, isLoading } = useComingSoon();

  if (isLoading || films.length === 0) return null;

  return (
    <section id="coming-soon" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <img
            src={comingSoonBanner}
            alt="Coming Soon"
            className="max-w-4xl mx-auto w-full h-auto"
          />
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {films.map((film, i) => {
            const tagLabel =
              film.series === "Throwback Thursday"
                ? "Throwback Thursday"
                : film.series === "Special Event"
                  ? "Special Event"
                  : undefined;

            return (
              <Link
                key={film.eventId}
                to={`/film/${slugify(film.title)}`}
                className="group relative overflow-hidden rounded-lg opacity-0 animate-fade-in block"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img
                  src={film.poster}
                  alt={film.title}
                  className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {tagLabel && (
                  <span className="absolute top-2 left-2 gold-gradient text-primary-foreground text-[10px] md:text-xs font-body font-semibold tracking-wider uppercase px-2 py-1 rounded-sm">
                    {tagLabel}
                  </span>
                )}
                {/* Title overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-3 pt-10">
                  <h3 className="font-heading text-sm md:text-base font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {film.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-primary/80 font-body tracking-wide mt-1">
                    {getComingSoonDateLabel(film)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
