import React, { useEffect, useState } from "react";
import styles from "../AllBooks/AllBooks.module.css";
import { getCssBooks } from "@/src/bookAPI";
import CssBookList from "./CssBooks";

export default async function CssBook({ params, baseParams }: any) {
  const page = baseParams?.page ? baseParams.page : 1;
  const cssbooks = await getCssBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>技術書一覧</div>
        <div className={styles.book_all_line} />
        <CssBookList cssbooks={cssbooks} />
      </div>
    </>
  );
}
