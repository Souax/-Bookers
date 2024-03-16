import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import JqueryBooks from "./jQuery";
import { getJqueryBooks } from "@/src/ProgrammingAPI";

export default async function jQueryBook({ params, jqueryParams }: any) {
  const page = jqueryParams?.page ? jqueryParams.page : 1;
  const jquerybooks = await getJqueryBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>JavaScript</div>
        <div className={styles.book_all_line} />
        <JqueryBooks jquerybooks={jquerybooks} />
      </div>
    </>
  );
}
