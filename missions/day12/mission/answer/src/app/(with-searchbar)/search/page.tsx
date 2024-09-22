import MovieItem from "@/components/movie-item";
import { MovieData } from "@/types";
import style from "./page.module.css";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  /* 동일한 검색어에 대해 다시 데이터를 불러오지 않게끔 하기 위해 force-cache 적용 */
  const response = await fetch(
    `http://localhost:12345/movie/search?q=${searchParams.q}`,
    {
      cache: "force-cache",
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const movies: MovieData[] = await response.json();

  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
