import Image from "next/image";
import styles from "../AllBooks/AllBooks.module.css";
import { getBaseBooks } from "@/src/bookAPI";
import BaseBooks from "./BaseBooks";

export default async function BaseBook({ params, baseParams }: any) {
  const page = baseParams?.page ? baseParams.page : 1;
  const basebooks = await getBaseBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>プログラミング入門書一覧</div>
        <div className={styles.book_all_line} />
        <BaseBooks basebooks={basebooks} />
      </div>
    </>
  );
}
