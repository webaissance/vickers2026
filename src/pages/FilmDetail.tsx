import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFilmFeed } from "@/hooks/useFilmFeed";
import {
  findFilmBySlug,
  formatRuntime,
  formatScreeningLabel,
} from "@/lib/filmFeed";

const FilmDetail = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const { data: films, isLoading, error } = useFilmFeed();

  const film = films ? findFilmBySlug(films, slug) : undefined;

  useEffect(() => {
    if (film) {
      document.title = `${film.title} — Vickers Theatre`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc && film.synopsis) {
        desc.setAttribute("content", film.synopsis.slice(0, 160));
      }
    }
    return () => {
      document.title = "Vickers Theatre";
    };
  }, [film]);

  const tagLabel =
    film?.series === "Throwback Thursday"
      ? "Throwback Thursday"
      : film?.series === "Special Event"
        ? "Special Event"
        : undefined;

  const releaseYear = film?.releaseDate?.match(/\d{4}/)?.[0];

  // Sort screenings chronologically
  const sortedShows = film
    ? [...film.shows].sort((a, b) => a.timestamp - b.timestamp)
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-16">
        {isLoading && (
          <div className="text-center text-muted-foreground font-body py-24">
            Loading…
          </div>
        )}

        {error && (
          <div className="text-center text-destructive font-body py-24">
            Unable to load film details. Please try again later.
          </div>
        )}

        {!isLoading && !error && !film && (
          <div className="text-center py-24 max-w-xl mx-auto">
            <h1 className="font-heading text-3xl gold-text-gradient font-semibold tracking-wider mb-4">
              Film not found
            </h1>
            <p className="text-foreground/70 font-body mb-6">
              We can't find that film. It may no longer be in our schedule.
            </p>
            <Link
              to="/#now-playing"
              className="inline-block border border-primary/60 text-primary font-body text-sm font-medium tracking-wide px-5 py-2 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors uppercase"
            >
              ← Back to Now Playing
            </Link>
          </div>
        )}

        {film && (
          <article className="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[360px_1fr] gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Poster */}
            <div className="relative overflow-hidden rounded-lg gold-glow mx-auto md:mx-0 max-w-[320px] md:max-w-none w-full">
              <img
                src={film.poster}
                alt={film.title}
                className="w-full aspect-[2/3] object-cover"
              />
              {tagLabel && (
                <span className="absolute top-3 left-3 gold-gradient text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase px-3 py-1 rounded-sm">
                  {tagLabel}
                </span>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold gold-text-gradient tracking-wider mb-3">
                {film.title}
              </h1>

              <p className="text-primary font-body text-sm tracking-wide mb-2">
                {[
                  formatRuntime(film.runtime),
                  film.rating,
                  releaseYear,
                  film.language,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </p>

              {(film.director || film.writer) && (
                <p className="text-foreground/70 font-body text-sm mb-1">
                  {film.director && <>Directed by {film.director}</>}
                  {film.director && film.writer && <> · </>}
                  {film.writer && <>Written by {film.writer}</>}
                </p>
              )}

              {film.cast && (
                <p className="text-foreground/70 font-body text-sm mb-4">
                  Starring {film.cast}
                </p>
              )}

              <div className="h-px w-24 bg-primary/50 my-6" />

              {film.synopsis && (
                <p className="text-foreground/80 font-body leading-relaxed mb-6 whitespace-pre-line">
                  {film.synopsis}
                </p>
              )}

              {film.trailer && (
                <a
                  href={film.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-8 inline-flex items-center gap-2 text-primary/80 hover:text-primary font-body text-xs tracking-widest uppercase transition-colors w-fit"
                >
                  Watch Trailer →
                </a>
              )}

              {sortedShows.length > 0 && (
                <>
                  <h2 className="font-heading text-xl text-foreground tracking-wider uppercase mb-3">
                    Showtimes
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {sortedShows.map((s) =>
                      s.soldOut ? (
                        <span
                          key={s.screeningId}
                          className="inline-block border border-muted text-muted-foreground font-body text-xs md:text-sm font-medium tracking-wide px-4 py-2 rounded-sm cursor-not-allowed line-through"
                        >
                          {formatScreeningLabel(s.date, s.time)} · Sold Out
                        </span>
                      ) : (
                        <a
                          key={s.screeningId}
                          href={s.screeningLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block border border-primary/60 text-primary font-body text-xs md:text-sm font-medium tracking-wide px-4 py-2 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {formatScreeningLabel(s.date, s.time)}
                        </a>
                      )
                    )}
                  </div>
                </>
              )}

              <Link
                to="/#now-playing"
                className="text-primary/80 hover:text-primary font-body text-xs tracking-widest uppercase transition-colors w-fit"
              >
                ← Back to Now Playing
              </Link>
            </div>
          </article>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FilmDetail;
