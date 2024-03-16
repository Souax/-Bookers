import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type JavaBookProps = {
  javabooks: ApiResponse;
};

const JavaBooks = ({ javabooks }: JavaBookProps) => {
  return (
    <div>
      {javabooks.data.map((javabook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={javabook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={javabook.params?.largeImageUrl}
                  alt={javabook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {javabook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{javabook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {javabook.params?.salesDate}発売/
                  {javabook.params?.publisherName}/{javabook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {javabook.params?.itemPrice}円(税込)
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

export default JavaBooks;
