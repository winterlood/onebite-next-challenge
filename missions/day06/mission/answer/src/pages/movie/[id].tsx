import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import style from "./[id].module.css";
import { useRouter } from "next/router";
import fetchOneMovie from "@/lib/fetch-one-movie";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const movie = await fetchOneMovie(Number(id));

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
    },
  };
};

export default function Page({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  if (router.isFallback) return "로딩중입니다";
  if (!movie) return "문제가 발생했습니다 다시 시도하세요";

  const {
    id,
    title,
    subTitle,
    company,
    runtime,
    description,
    posterImgUrl,
  } = movie;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <img src={posterImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {company} | {runtime}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
