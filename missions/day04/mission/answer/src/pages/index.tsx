import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  return <h2>ONEBITE CINEMA</h2>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
