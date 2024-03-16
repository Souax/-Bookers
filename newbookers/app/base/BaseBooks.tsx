import { ApiResponse } from "../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../BookList.module.css";

type BaseBookProps = {
  basebooks: ApiResponse;
};

const BaseBooks = ({ basebooks }: BaseBookProps) => {
  return (
    <div>
      {basebooks.data.map((basebook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={basebook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={basebook.params?.largeImageUrl}
                  alt={basebook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {basebook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{basebook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {basebook.params?.salesDate}発売/
                  {basebook.params?.publisherName}/{basebook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {basebook.params?.itemPrice}円(税込)
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

export default BaseBooks;
