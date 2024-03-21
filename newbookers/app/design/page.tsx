import React, { useEffect, useState } from "react";
import styles from "../AllBooks/AllBooks.module.css";
import { getCssBooks } from "@/src/bookAPI";
import CssBookList from "./CssBooks";
import PaginationComponent from "../components/pagination/Pagination";

export default async function CssBook({ params, searchParams }: any) {
  const page = searchParams.page ? searchParams.page : 1;
  const cssbooks = await getCssBooks(page);
  const totalDataCount = 1367;
  const itemsPerPage = 10;
  const baseURL = "design";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>技術書一覧</div>
        <div className={styles.book_all_line} />
        <CssBookList cssbooks={cssbooks} />
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
