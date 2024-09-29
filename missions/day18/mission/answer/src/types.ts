export interface MovieData {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  releaseDate: string;
  company: string;
  genres: string[];
  runtime: number;
  posterImgUrl: string;
}

export interface ReviewData {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  movieId: number;
}
