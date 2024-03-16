import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import NestBooks from "./Nest";
import { getNestBooks } from "@/src/ProgrammingAPI";

export default async function NestBook({ params, nestParams }: any) {
  const page = nestParams?.page ? nestParams.page : 1;
  const nestbooks = await getNestBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>NestJS</div>
        <div className={styles.book_all_line} />
        <NestBooks nestbooks={nestbooks} />
      </div>
    </>
  );
}
