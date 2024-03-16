import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import PhpBooks from "./PHP";
import { getPhpBooks } from "@/src/ProgrammingAPI";

export default async function PhpBook({ params, phpParams }: any) {
  const page = phpParams?.page ? phpParams.page : 1;
  const phpbooks = await getPhpBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>PHP</div>
        <div className={styles.book_all_line} />
        <PhpBooks phpbooks={phpbooks} />
      </div>
    </>
  );
}
