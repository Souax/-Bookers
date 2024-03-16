import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import { getTypeScriptBooks } from "@/src/ProgrammingAPI";
import TypescriptBooks from "./Typescript";

export default async function TypescriptBook({
  params,
  typescriptParams,
}: any) {
  const page = typescriptParams?.page ? typescriptParams.page : 1;
  const typescriptbooks = await getTypeScriptBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>JavaScript</div>
        <div className={styles.book_all_line} />
        <TypescriptBooks typescriptbooks={typescriptbooks} />
      </div>
    </>
  );
}
