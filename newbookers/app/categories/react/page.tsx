import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import ReactBooks from "./React";
import { getReactBooks } from "@/src/ProgrammingAPI";

export default async function ReactBook({ params, reactParams }: any) {
  const page = reactParams?.page ? reactParams.page : 1;
  const reactbooks = await getReactBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>JavaScript</div>
        <div className={styles.book_all_line} />
        <ReactBooks reactbooks={reactbooks} />
      </div>
    </>
  );
}
