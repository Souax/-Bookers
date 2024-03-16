import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import VueBooks from "./Vue";
import { getVueBooks } from "@/src/ProgrammingAPI";

export default async function VueBook({ params, vueParams }: any) {
  const page = vueParams?.page ? vueParams.page : 1;
  const vuebooks = await getVueBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Vue</div>
        <div className={styles.book_all_line} />
        <VueBooks vuebooks={vuebooks} />
      </div>
    </>
  );
}
