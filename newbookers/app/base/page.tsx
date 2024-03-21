import Image from "next/image";
import styles from "../AllBooks/AllBooks.module.css";
import { getBaseBooks } from "@/src/bookAPI";
import BaseBooks from "./BaseBooks";
import PaginationComponent from "../components/pagination/Pagination";

export default async function BaseBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const basebooks = await getBaseBooks(page);
  const itemsPerPage = 15;
  const totalDataCount = 1367;
  const baseURL = "base";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>プログラミング入門書</div>
        <div className={styles.book_all_line} />
        <BaseBooks basebooks={basebooks} />
        <PaginationComponent
          currentPage={page}
          totalDataCount={totalDataCount}
          itemsPerPage={itemsPerPage}
          baseURL={baseURL}
        />
      </div>
    </>
  );
}
