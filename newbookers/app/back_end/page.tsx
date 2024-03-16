import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../AllBooks/AllBooks.module.css";
import { getBackBooks } from "@/src/bookAPI";
import BackBooks from "./Back";

export default async function BackBook({ params, backParams }: any) {
  const page = backParams?.page ? backParams.page : 1;
  const backbooks = await getBackBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>技術書一覧</div>
        <div className={styles.book_all_line} />
        <BackBooks backbooks={backbooks} />
      </div>
    </>
  );
}
