import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import NextBooks from "./Next";
import { getNextBooks } from "@/src/ProgrammingAPI";

export default async function NextBook({ params, nextParams }: any) {
  const page = nextParams?.page ? nextParams.page : 1;
  const nextbooks = await getNextBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>JavaScript</div>
        <div className={styles.book_all_line} />
        <NextBooks nextbooks={nextbooks} />
      </div>
    </>
  );
}
