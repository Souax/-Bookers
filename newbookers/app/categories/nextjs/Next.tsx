import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type NextBookProps = {
  nextbooks: ApiResponse;
};

const NextBooks = ({ nextbooks }: NextBookProps) => {
  return (
    <div>
      {nextbooks.data.map((nextbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={nextbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={nextbook.params?.largeImageUrl}
                  alt={nextbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {nextbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{nextbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {nextbook.params?.salesDate}発売/
                  {nextbook.params?.publisherName}/{nextbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {nextbook.params?.itemPrice}円(税込)
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

export default NextBooks;
