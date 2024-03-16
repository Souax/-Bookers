import Image from "next/image";
import styles from "../AllBooks/AllBooks.module.css";
import { getWebBooks } from "@/src/bookAPI";
import WebBooks from "./WebDevelopment";

export default async function WebBook({ params, webParams }: any) {
  const page = webParams?.page ? webParams.page : 1;
  const webbooks = await getWebBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Web開発書籍</div>
        <div className={styles.book_all_line} />
        <WebBooks webbooks={webbooks} />
      </div>
    </>
  );
}
