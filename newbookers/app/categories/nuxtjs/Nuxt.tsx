import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type NuxtBookProps = {
  nuxtbooks: ApiResponse;
};

const NuxtBooks = ({ nuxtbooks }: NuxtBookProps) => {
  return (
    <div>
      {nuxtbooks.data.map((nuxtbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={nuxtbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={nuxtbook.params?.largeImageUrl}
                  alt={nuxtbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {nuxtbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{nuxtbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {nuxtbook.params?.salesDate}発売/
                  {nuxtbook.params?.publisherName}/{nuxtbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {nuxtbook.params?.itemPrice}円(税込)
                </div>
              </div>
            </div>
            <div className={styles.book_bottom_line}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NuxtBooks;