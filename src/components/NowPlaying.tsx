import { useNowPlaying } from "@/hooks/useFilmFeed";
import { formatScreeningLabel, type FilmEvent } from "@/lib/filmFeed";
import { getCurrentFilmWeek } from "@/lib/filmFeed";
import nowPlayingBanner from "@/assets/now-playing.png";

const NowPlaying = () => {
  const { data: films, isLoading, error } = useNowPlaying();

  // Filter screenings to only those in the current film week
  const { start, end } = getCurrentFilmWeek();

  const filmsWithCurrentWeekShows = films.map((film) => ({
    ...film,
    shows: film.shows.filter((s) => {
      const [m, d, y] = s.date.split("/").map(Number);
      const sd = new Date(y, m - 1, d);
      return sd >= start && sd <= end;
    }),
  }));

  return (
    <section id="now-playing" className="pt-4 pb-16 md:pt-6 md:pb-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-8 md:mb-10">
          <h1 className="sr-only">Now Playing — This Week at the Vickers</h1>
          <img
            src={nowPlayingBanner}
            alt="Now Playing — This Week at the Vickers"
            className="w-full max-w-4xl mx-auto h-auto"
          />
        </div>


        {isLoading && (
          <div className="text-center text-muted-foreground font-body py-12">
            Loading showtimes…
          </div>
        )}

        {error && (
          <div className="text-center text-destructive font-body py-12">
            Unable to load showtimes. Please try again later.
          </div>
        )}

        {/* Films */}
        <div className="space-y-16 md:space-y-20">
          {filmsWithCurrentWeekShows.map((film, i) => (
            <FilmCard key={film.eventId} film={film} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function FilmCard({ film, index }: { film: FilmEvent; index: number }) {
  const tagLabel =
    film.series === "Throwback Thursday"
      ? "Throwback Thursday"
      : film.series === "Special Event"
        ? "Special Event"
        : film.shows.length === 0
          ? undefined
          : undefined;

  return (
    <article
      className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-8 md:gap-12 opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Poster */}
      <a
        href={film.movieLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-lg gold-glow mx-auto md:mx-0 max-w-[280px] md:max-w-none"
      >
        <img
          src={film.poster}
          alt={film.title}
          className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-105"
          loading={index === 0 ? "eager" : "lazy"}
        />
        {tagLabel && (
          <span className="absolute top-3 left-3 gold-gradient text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase px-3 py-1 rounded-sm">
            {tagLabel}
          </span>
        )}
      </a>

      {/* Details */}
      <div className="flex flex-col justify-center">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
          {film.title}
        </h2>
        <p className="text-primary font-body text-sm tracking-wide mb-4">
          {formatRuntime(film.runtime)} · {film.rating}
          {film.director && <> &nbsp;·&nbsp; {film.director}, director</>}
        </p>
        <p className="text-foreground/70 font-body leading-relaxed mb-6 max-w-xl">
          {film.synopsis}
        </p>

        {film.trailer && (
          <a
            href={film.trailer}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-flex items-center gap-2 text-primary/80 hover:text-primary font-body text-xs tracking-widest uppercase transition-colors"
          >
            Watch Trailer →
          </a>
        )}

        {/* Showtimes */}
        <div className="flex flex-wrap gap-2">
          {film.shows.map((s) => (
            <a
              key={s.screeningId}
              href={s.screeningLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-primary/60 text-primary font-body text-xs md:text-sm font-medium tracking-wide px-4 py-2 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              {formatScreeningLabel(s.date, s.time)}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default NowPlaying;
