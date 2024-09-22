export default function Page({
  searchParams: { q },
}: {
  searchParams: { q: string };
}) {
  return <div>Search : {q}</div>;
}
