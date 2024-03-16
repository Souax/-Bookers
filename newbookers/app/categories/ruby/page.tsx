import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import RubyBooks from "./Ruby";
import { getRubyBooks } from "@/src/ProgrammingAPI";

export default async function RubyBook({ params, rubyParams }: any) {
  const page = rubyParams?.page ? rubyParams.page : 1;
  const rubybooks = await getRubyBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Ruby</div>
        <div className={styles.book_all_line} />
        <RubyBooks rubybooks={rubybooks} />
      </div>
    </>
  );
}
