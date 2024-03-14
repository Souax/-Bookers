import React, { useEffect, useState } from "react";
import styles from "../AllBooks/AllBooks.module.css";
import { getCssBooks } from "@/src/bookAPI";
import CssBookList from "./CssBooks";

export default async function CssBook() {
  const cssbooks = await getCssBooks();

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
