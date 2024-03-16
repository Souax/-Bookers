import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import PythonBooks from "./Python";
import { getPythonBooks } from "@/src/ProgrammingAPI";

export default async function PythonBook({ params, pythonParams }: any) {
  const page = pythonParams?.page ? pythonParams.page : 1;
  const pythonbooks = await getPythonBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Python</div>
        <div className={styles.book_all_line} />
        <PythonBooks pythonbooks={pythonbooks} />
      </div>
    </>
  );
}
