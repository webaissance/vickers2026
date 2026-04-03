const FEED_URL =
  "https://easyware.webaissance.com/feeds/Vickers/parsefeed.php?key=7j*pQn)l36";

export interface Screening {
  screeningId: string;
  screeningLink: string;
  date: string; // "4/3/2026"
  time: string; // "7:00 PM"
  soldOut: boolean;
  timestamp: number;
}

export interface FilmEvent {
  eventId: string;
  title: string;
  isMovie: boolean;
  rating: string;
  synopsis: string;
  type: string;
  director: string;
  language: string;
  releaseDate: string;
  startDate: string;
  poster: string;
  writer: string;
  cast: string;
  series: string;
  distributor: string;
  movieLink: string;
  trailer: string;
  runtime: number;
  shows: Screening[];
}

function getText(el: Element, tag: string): string {
  return el.querySelector(tag)?.textContent?.trim() ?? "";
}

function parseEvent(el: Element): FilmEvent {
  const showEls = el.querySelectorAll("shows > show");
  const shows: Screening[] = Array.from(showEls).map((s) => ({
    screeningId: getText(s, "screeningid"),
    screeningLink: getText(s, "screeninglink"),
    date: getText(s, "screeningdate"),
    time: getText(s, "screeningtime"),
    soldOut: getText(s, "soldout") === "1",
    timestamp: Number(getText(s, "timestamp")),
  }));

  return {
    eventId: getText(el, "eventid"),
    title: getText(el, "title"),
    isMovie: getText(el, "ismovie") === "True",
    rating: getText(el, "rating"),
    synopsis: getText(el, "synopsis"),
    type: getText(el, "type"),
    director: getText(el, "director"),
    language: getText(el, "language"),
    releaseDate: getText(el, "releasedate"),
    startDate: getText(el, "startdate"),
    poster: getText(el, "poster"),
    writer: getText(el, "writer"),
    cast: getText(el, "cast"),
    series: getText(el, "series"),
    distributor: getText(el, "distributor"),
    movieLink: getText(el, "movielink"),
    trailer: getText(el, "trailer"),
    runtime: Number(getText(el, "runtime")) || 0,
    shows,
  };
}

export async function fetchFilmFeed(): Promise<FilmEvent[]> {
  const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(FEED_URL)}`;
  const res = await fetch(proxyUrl);
  if (!res.ok) throw new Error(`Feed fetch failed: ${res.status}`);
  const xml = await res.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const events = doc.querySelectorAll("event");
  return Array.from(events).map(parseEvent);
}

/**
 * Get the current "film week" boundaries.
 * A film week runs Friday through Thursday.
 * Returns [friday 00:00, thursday 23:59:59] of the current week.
 */
export function getCurrentFilmWeek(): { start: Date; end: Date } {
  const now = new Date();
  const day = now.getDay(); // 0=Sun .. 6=Sat
  // Days since last Friday: Fri=0, Sat=1, Sun=2, Mon=3, Tue=4, Wed=5, Thu=6
  const daysSinceFriday = (day + 2) % 7;
  const friday = new Date(now);
  friday.setDate(now.getDate() - daysSinceFriday);
  friday.setHours(0, 0, 0, 0);

  const thursday = new Date(friday);
  thursday.setDate(friday.getDate() + 6);
  thursday.setHours(23, 59, 59, 999);

  return { start: friday, end: thursday };
}

function parseUSDate(dateStr: string): Date {
  const [m, d, y] = dateStr.split("/").map(Number);
  return new Date(y, m - 1, d);
}

/**
 * Films currently showing this week (have at least one screening in the current Fri-Thu window).
 */
export function getNowPlaying(films: FilmEvent[]): FilmEvent[] {
  const { start, end } = getCurrentFilmWeek();
  return films.filter((f) =>
    f.shows.some((s) => {
      const d = parseUSDate(s.date);
      return d >= start && d <= end;
    })
  );
}

/**
 * Films whose first screening is after the current film week.
 */
export function getComingSoon(films: FilmEvent[]): FilmEvent[] {
  const { end } = getCurrentFilmWeek();
  return films
    .filter((f) => {
      const startD = parseUSDate(f.startDate);
      return startD > end;
    })
    .sort((a, b) => parseUSDate(a.startDate).getTime() - parseUSDate(b.startDate).getTime());
}

/**
 * Format screening date/time into a user-friendly label like "Fri, Apr 3 · 7:00 PM"
 */
export function formatScreeningLabel(dateStr: string, timeStr: string): string {
  const d = parseUSDate(dateStr);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()} · ${timeStr}`;
}

/**
 * Build a date label for coming soon films.
 */
export function getComingSoonDateLabel(film: FilmEvent): string {
  const startD = parseUSDate(film.startDate);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dateStr = `${months[startD.getMonth()]} ${startD.getDate()}`;

  // If only one screening, it's likely a one-night-only event
  if (film.shows.length === 1 || film.series === "Throwback Thursday" || film.series === "Special Event") {
    return `One Night Only · ${dateStr}`;
  }
  return `Opens ${dateStr}`;
}
