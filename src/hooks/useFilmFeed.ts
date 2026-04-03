import { useQuery } from "@tanstack/react-query";
import { fetchFilmFeed, getNowPlaying, getComingSoon, type FilmEvent } from "@/lib/filmFeed";

export function useFilmFeed() {
  return useQuery<FilmEvent[]>({
    queryKey: ["film-feed"],
    queryFn: fetchFilmFeed,
    staleTime: 1000 * 60 * 15, // 15 minutes
    refetchOnWindowFocus: false,
  });
}

export function useNowPlaying() {
  const query = useFilmFeed();
  const nowPlaying = query.data ? getNowPlaying(query.data) : [];
  return { ...query, data: nowPlaying };
}

export function useComingSoon() {
  const query = useFilmFeed();
  const comingSoon = query.data ? getComingSoon(query.data) : [];
  return { ...query, data: comingSoon };
}
