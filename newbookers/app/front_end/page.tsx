import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../AllBooks/AllBooks.module.css";
import { getFrontBooks } from "@/src/bookAPI";
import FrontBooks from "./Front";

export default async function FrontBook({ params, frontParams }: any) {
  const page = frontParams?.page ? frontParams.page : 1;
  const frontbooks = await getFrontBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>技術書一覧</div>
        <div className={styles.book_all_line} />
        <FrontBooks frontbooks={frontbooks} />
      </div>
    </>
  );
}
