import Searchbar from "@/components/searchbar";
import { ReactNode, Suspense } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<></>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
