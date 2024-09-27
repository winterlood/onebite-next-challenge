"use server";

export async function createReviewAction(formData: FormData) {
  const movieId = formData.get("movieId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!movieId || !content || !author) {
    return;
  }

  try {
    const response = await fetch(`http://localhost:12345/review`, {
      method: "POST",
      body: JSON.stringify({ movieId, content, author }),
    });
  } catch (err) {
    console.error(err);
    return;
  }
}
