import Image from "next/image";
import styles from "../AllBooks/AllBooks.module.css";
import { getComputerBooks } from "@/src/bookAPI";
import ComputerBooks from "./ComputerScience";

export default async function ComputerBook({ params, computerParams }: any) {
  const page = computerParams?.page ? computerParams.page : 1;
  const computerbooks = await getComputerBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>
          コンピューターサイエンス書籍
        </div>
        <div className={styles.book_all_line} />
        <ComputerBooks computerbooks={computerbooks} />
      </div>
    </>
  );
}
