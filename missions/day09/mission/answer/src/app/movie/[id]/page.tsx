export default function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <div>{params.id}번 영화</div>;
}
