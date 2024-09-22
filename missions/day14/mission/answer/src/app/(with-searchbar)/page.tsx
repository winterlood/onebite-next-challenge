import MovieItem from "@/components/movie-item";
import style from "./page.module.css";
import { MovieData } from "@/types";

async function AllMovies() {
  /* 새로운 영화를 추가하거나 삭제하지 않으므로 영구 캐싱 적용 */
  const response = await fetch(`http://localhost:12345/movie`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }

  const allMovies: MovieData[] = await response.json();
  return (
    <div className={style.all_container}>
      {allMovies.map((movie) => (
        <MovieItem key={`all-${movie.id}`} {...movie} />
      ))}
    </div>
  );
}

async function RecoMovies() {
  /* 3초 주기로 추천 영화를 변경하기 위해 revalidate 적용 */
  const response = await fetch(
    `http://localhost:12345/movie/random`,
    {
      next: { revalidate: 3 },
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const recoMovies: MovieData[] = await response.json();
  return (
    <div className={style.reco_container}>
      {recoMovies.map((movie) => (
        <MovieItem key={`reco-${movie.id}`} {...movie} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoMovies />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllMovies />
      </section>
    </div>
  );
}
