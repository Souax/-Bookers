import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type NestBookProps = {
  nestbooks: ApiResponse;
};

const NestBooks = ({ nestbooks }: NestBookProps) => {
  return (
    <div>
      {nestbooks.data.map((nestbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={nestbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={nestbook.params?.largeImageUrl}
                  alt={nestbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {nestbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{nestbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {nestbook.params?.salesDate}発売/
                  {nestbook.params?.publisherName}/{nestbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {nestbook.params?.itemPrice}円(税込)
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

export default NestBooks;
