import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import GoBooks from "./Go";
import { getGoBooks } from "@/src/ProgrammingAPI";

export default async function GoBook({ params, goParams }: any) {
  const page = goParams?.page ? goParams.page : 1;
  const gobooks = await getGoBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Go</div>
        <div className={styles.book_all_line} />
        <GoBooks gobooks={gobooks} />
      </div>
    </>
  );
}
