import Image from "next/image";
import styles from "../AllBooks/AllBooks.module.css";
import { getUsefulBooks } from "@/src/bookAPI";
import UsefulBooks from "./UsefulBooks";

export default async function UsefulBook({ params, usefulParams }: any) {
  const page = usefulParams?.page ? usefulParams.page : 1;
  const usefulbooks = await getUsefulBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>プログラミング入門書一覧</div>
        <div className={styles.book_all_line} />
        <UsefulBooks usefulbooks={usefulbooks} />
      </div>
    </>
  );
}
