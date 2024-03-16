import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import JavaBooks from "./Java";
import { getJavaBooks } from "@/src/ProgrammingAPI";

export default async function JavaBook({ params, javaParams }: any) {
  const page = javaParams?.page ? javaParams.page : 1;
  const javabooks = await getJavaBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>JavaScript</div>
        <div className={styles.book_all_line} />
        <JavaBooks javabooks={javabooks} />
      </div>
    </>
  );
}
