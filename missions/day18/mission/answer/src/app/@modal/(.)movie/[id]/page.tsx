import MoviePage from "@/app/movie/[id]/page";
import Modal from "@/components/modal";

export default function Page(props: any) {
  console.log("Modal Page");
  return (
    <Modal>
      <MoviePage {...props} />
    </Modal>
  );
}
