import Image from "next/image";
import styles from "../AllBooks/AllBooks.module.css";
import { getInfraBooks } from "@/src/bookAPI";
import InfraBooks from "./Infrastructure";

export default async function InfraBook({ params, infraParams }: any) {
  const page = infraParams?.page ? infraParams.page : 1;
  const infrabooks = await getInfraBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>技術書一覧</div>
        <div className={styles.book_all_line} />
        <InfraBooks infrabooks={infrabooks} />
      </div>
    </>
  );
}
