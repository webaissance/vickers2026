interface Showtime {
  label: string;
  ticketUrl: string;
}

interface Film {
  title: string;
  posterUrl: string;
  runtime: string;
  director: string;
  synopsis: string;
  tag?: string;
  showtimes: Showtime[];
  infoUrl: string;
}

const nowPlayingFilms: Film[] = [
  {
    title: "Ghost Elephants",
    posterUrl: "https://vickerstheatre.com/wp-content/uploads/2026/03/ghostelephant-scaled.jpg",
    runtime: "99 min · PG-13",
    director: "Werner Herzog",
    synopsis: "From acclaimed director Werner Herzog, GHOST ELEPHANTS follows conservation biologist Dr. Steve Boyes on an epic journey in search of a mysterious, elusive herd of elephants in the highlands of Angola.",
    showtimes: [
      { label: "Fri, Mar 27 · 4:00 PM", ticketUrl: "https://vickerstheatre.easy-ware-ticketing.com/generaladmission/irKGsnzvWaxGdW8Ysr5eFA" },
      { label: "Fri, Mar 27 · 7:00 PM", ticketUrl: "https://vickerstheatre.easy-ware-ticketing.com/generaladmission/9Y02m8eAm7MQwFO3gqjAOQ" },
      { label: "Sat, Mar 28 · 7:00 PM", ticketUrl: "https://vickerstheatre.easy-ware-ticketing.com/generaladmission/QbZUlxH_plGZOHoD_eN9Sg" },
      { label: "Sun, Mar 29 · 1:00 PM", ticketUrl: "https://vickerstheatre.easy-ware-ticketing.com/generaladmission/SDspraByVvLoGZcKne1gww" },
      { label: "Sun, Mar 29 · 4:00 PM", ticketUrl: "https://vickerstheatre.easy-ware-ticketing.com/generaladmission/cvdhS7gIHw0ByJKmjU7-dw" },
    ],
    infoUrl: "https://vickerstheatre.com/event/?title=Ghost%20Elephants",
  },
  {
    title: "Kobanê",
    posterUrl: "https://vickerstheatre.com/wp-content/uploads/2026/03/kobane-565x800.jpg",
    runtime: "2hr 38m · NR",
    director: "Özlem Yasar",
    synopsis: "A special free screening presented in partnership with Cafe Gulistan. Kobanê tells the inspiring true story of Zehra, a Kurdish woman who steps up to lead during a critical moment in 2014.",
    tag: "Free Screening",
    showtimes: [
      { label: "Sat, Mar 28 · 3:00 PM · FREE", ticketUrl: "https://vickerstheatre.com/film/kobane/" },
    ],
    infoUrl: "https://vickerstheatre.com/film/kobane/",
  },
  {
    title: "The Godfather",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_SX300.jpg",
    runtime: "175 min · R",
    director: "Francis Ford Coppola",
    synopsis: "Francis Ford Coppola's epic masterpiece stars Marlon Brando in his Oscar-winning role as the patriarch of the Corleone family. Winner of three Academy Awards including Best Picture.",
    tag: "Throwback Thursday",
    showtimes: [
      { label: "Thu, Apr 2 · 7:00 PM", ticketUrl: "https://vickerstheatre.easy-ware-ticketing.com/generaladmission/Vcn2OZvC9uite1KaBFARgg" },
    ],
    infoUrl: "https://vickerstheatre.com/event/?title=The%20Godfather",
  },
];

const NowPlaying = () => {
  return (
    <section id="now-playing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold gold-text-gradient mb-3">
            Now Playing
          </h1>
          <p className="text-muted-foreground font-body text-sm tracking-widest uppercase">
            This Week at the Vickers · Click a showtime to buy tickets
          </p>
          <div className="mt-4 mx-auto w-24 h-px bg-primary/40" />
        </div>

        {/* Films */}
        <div className="space-y-16 md:space-y-20">
          {nowPlayingFilms.map((film, i) => (
            <article
              key={film.title}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-8 md:gap-12 opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Poster */}
              <a
                href={film.infoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg gold-glow mx-auto md:mx-0 max-w-[280px] md:max-w-none"
              >
                <img
                  src={film.posterUrl}
                  alt={film.title}
                  className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                {film.tag && (
                  <span className="absolute top-3 left-3 gold-gradient text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase px-3 py-1 rounded-sm">
                    {film.tag}
                  </span>
                )}
              </a>

              {/* Details */}
              <div className="flex flex-col justify-center">
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {film.title}
                </h2>
                <p className="text-primary font-body text-sm tracking-wide mb-4">
                  {film.runtime} &nbsp;·&nbsp; {film.director}, director
                </p>
                <p className="text-foreground/70 font-body leading-relaxed mb-6 max-w-xl">
                  {film.synopsis}
                </p>

                {/* Showtimes */}
                <div className="flex flex-wrap gap-2">
                  {film.showtimes.map((st) => (
                    <a
                      key={st.label}
                      href={st.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-primary/60 text-primary font-body text-xs md:text-sm font-medium tracking-wide px-4 py-2 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {st.label}
                    </a>
                  ))}
                </div>

                <a
                  href={film.infoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-primary/80 hover:text-primary font-body text-xs tracking-widest uppercase transition-colors"
                >
                  Trailer &amp; Info →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NowPlaying;
