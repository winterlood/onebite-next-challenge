import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return <h2>{id} 영화 상세페이지</h2>;
}
