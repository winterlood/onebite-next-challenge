"use server";

import { delay } from "@/util/delay";
import { revalidateTag } from "next/cache";

export async function createReviewAction(_: any, formData: FormData) {
  const movieId = formData.get("movieId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!movieId || !content || !author) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요",
    };
  }

  try {
    await delay(2000);
    const response = await fetch(`http://localhost:12345/review`, {
      method: "POST",
      body: JSON.stringify({ movieId, content, author }),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    revalidateTag(`review-${movieId}`);
    return {
      status: true,
      error: "",
    };
  } catch (err) {
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다 : ${err}`,
    };
  }
}
