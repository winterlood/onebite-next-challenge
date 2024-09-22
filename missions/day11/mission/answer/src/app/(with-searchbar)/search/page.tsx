import MovieItem from "@/components/movie-item";
import movies from "@/dummy.json";
import style from "./page.module.css";

export default function Page() {
  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
