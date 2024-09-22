import { MovieData } from "@/types";
import style from "./page.module.css";

export const dynamicParams = false;

export async function generateStaticParams() {
  const response = await fetch(`http://localhost:12345/movie`);
  if (!response.ok) throw new Error("Fetch failed: ~/movie");

  const movies: MovieData[] = await response.json();
  return movies.map(({ id }) => ({ id: id.toString() }));
}

export default async function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  /* 상세페이지의 정보가 변경되지 않을 것이므로 force-cache 적용 */
  const response = await fetch(
    `http://localhost:12345/movie/${params.id}`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const movie: MovieData = await response.json();

  const {
    title,
    subTitle,
    company,
    runtime,
    description,
    posterImgUrl,
    releaseDate,
    genres,
  } = movie;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <img src={posterImgUrl} />
      </div>
      <div className={style.info_container}>
        <div>
          <h2>{title}</h2>
          <div>
            {releaseDate} / {genres.join(", ")} / {runtime}분
          </div>
          <div>{company}</div>
        </div>
        <div>
          <div className={style.subTitle}>{subTitle}</div>
          <div className={style.description}>{description}</div>
        </div>
      </div>
    </div>
  );
}
