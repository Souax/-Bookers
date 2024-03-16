import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import JavascriptBooks from "./Javascript";
import { getJavaScriptBooks } from "@/src/ProgrammingAPI";

export default async function JavascriptBook({
  params,
  javascriptParams,
}: any) {
  const page = javascriptParams?.page ? javascriptParams.page : 1;
  const javascriptbooks = await getJavaScriptBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>JavaScript</div>
        <div className={styles.book_all_line} />
        <JavascriptBooks javascriptbooks={javascriptbooks} />
      </div>
    </>
  );
}
