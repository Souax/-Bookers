import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import RailsBooks from "./Rails";
import { getRailsBooks } from "@/src/ProgrammingAPI";

export default async function RailsBook({ params, railsParams }: any) {
  const page = railsParams?.page ? railsParams.page : 1;
  const railsbooks = await getRailsBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>JavaScript</div>
        <div className={styles.book_all_line} />
        <RailsBooks railsbooks={railsbooks} />
      </div>
    </>
  );
}
