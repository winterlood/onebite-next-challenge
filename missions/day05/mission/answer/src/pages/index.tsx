import MovieItem from "@/components/movie-item";
import SearchableLayout from "@/components/searchable-layout";
import { InferGetStaticPropsType } from "next";
import { ReactNode } from "react";
import style from "./index.module.css";
import movies from "@/dummy.json";

export default function Home() {
  return (
    <div className={style.conatiner}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.reco_conatiner}>
          {movies.slice(0, 3).map((movie) => (
            <MovieItem key={`recomovie-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_container}>
          {movies.map((movie) => (
            <MovieItem key={`recomovie-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
