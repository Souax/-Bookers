import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import NuxtBooks from "./Nuxt";
import { getNuxtBooks } from "@/src/ProgrammingAPI";

export default async function NuxtBook({ params, nuxtParams }: any) {
  const page = nuxtParams?.page ? nuxtParams.page : 1;
  const nuxtbooks = await getNuxtBooks(page);

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Nuxt.js</div>
        <div className={styles.book_all_line} />
        <NuxtBooks nuxtbooks={nuxtbooks} />
      </div>
    </>
  );
}
