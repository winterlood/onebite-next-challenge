import { MovieData, ReviewData } from "@/types";
import style from "./page.module.css";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";

export const dynamicParams = false;

export async function generateStaticParams() {
  const response = await fetch(`http://localhost:12345/movie`);
  if (!response.ok) throw new Error("Fetch failed: ~/movie");

  const movies: MovieData[] = await response.json();
  return movies.map(({ id }) => ({ id: id.toString() }));
}

async function MovieDetail({ movieId }: { movieId: string }) {
  const response = await fetch(
    `http://localhost:12345/movie/${movieId}`,
    {
      cache: "force-cache",
    }
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
    <section>
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
    </section>
  );
}

async function ReviewList({ movieId }: { movieId: string }) {
  const response = await fetch(
    `http://localhost:12345/review/movie/${movieId}`,
    { next: { tags: [`review-${movieId}`] } }
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed : ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
}

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className={style.container}>
      <MovieDetail movieId={params.id} />
      <ReviewEditor movieId={params.id} />
      <ReviewList movieId={params.id} />
    </div>
  );
}
