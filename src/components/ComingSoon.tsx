interface ComingSoonFilm {
  title: string;
  posterUrl: string;
  infoUrl: string;
  dateLabel: string;
}

const comingSoonFilms: ComingSoonFilm[] = [
  {
    title: "Calle Málaga",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTNmZjdlYmQtZDU5Zi00OWJhLThlNWUtMzZiMTkyMjI5NWUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    infoUrl: "https://vickerstheatre.com/event/?title=Calle%20M%C3%A1laga",
    dateLabel: "Opens Apr 3",
  },
  {
    title: "Saturday Night Fever",
    posterUrl: "https://vickerstheatre.com/wp-content/uploads/2026/03/snf-bluray-800x1200-c.jpg",
    infoUrl: "https://vickerstheatre.com/event/?title=Saturday%20Night%20Fever",
    dateLabel: "One Night Only · Apr 9",
  },
  {
    title: "Project Hail Mary",
    posterUrl: "https://vickerstheatre.com/wp-content/uploads/2026/03/phm-scaled.jpg",
    infoUrl: "https://vickerstheatre.com/event/?title=Project%20Hail%20Mary",
    dateLabel: "Opens Apr 10",
  },
  {
    title: "King Creole",
    posterUrl: "https://vickerstheatre.com/wp-content/uploads/2026/03/pp-resize-kingcreole-c-533x800.jpg",
    infoUrl: "https://vickerstheatre.com/film/king-creole/",
    dateLabel: "One Night Only · Apr 11",
  },
  {
    title: "The Godfather Part II",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_SX300.jpg",
    infoUrl: "https://vickerstheatre.com/event/?title=The%20Godfather%20Part%20II",
    dateLabel: "One Night Only · Apr 16",
  },
  {
    title: "Little Shop of Horrors",
    posterUrl: "https://vickerstheatre.com/wp-content/uploads/2026/02/MV5BNTJjM2VhMDctMTIxYi00MzY3LWI5ZDgtZjFiNzg0M2QxNzI5XkEyXkFqcGc@._V1_SX300.jpg",
    infoUrl: "https://vickerstheatre.com/film/little-shop-of-horrors/",
    dateLabel: "One Night Only · Apr 23",
  },
  {
    title: "Michael",
    posterUrl: "https://vickerstheatre.com/wp-content/uploads/2026/03/MAVEN_2025x3000_KA_V2-scaled.jpg",
    infoUrl: "https://vickerstheatre.com/event/?title=Michael",
    dateLabel: "Opens Apr 24",
  },
];

const ComingSoon = () => {
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
          {comingSoonFilms.map((film, i) => (
            <a
              key={film.title}
              href={film.infoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg opacity-0 animate-fade-in block"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={film.posterUrl}
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
                  {film.dateLabel}
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
