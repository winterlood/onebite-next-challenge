import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { username } = router.query;

  return <h2>{username}님의 설정 페이지입니다</h2>;
}
