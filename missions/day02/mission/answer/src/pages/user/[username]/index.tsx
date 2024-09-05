import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { username } = router.query;

  return <h2>{username}님 안녕하세요</h2>;
}
