import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../AllBooks/AllBooks.module.css";
import { getBaseBooks } from "@/src/bookAPI";
import BaseBooks from "./BaseBooks";

export default async function BaseBook() {
  const basebooks: any = await getBaseBooks();

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>技術書一覧</div>
        <div className={styles.book_all_line} />
        <BaseBooks basebooks={basebooks} />
      </div>
    </>
  );
}
