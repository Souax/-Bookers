import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type PhpBookProps = {
  phpbooks: ApiResponse;
};

const PhpBooks = ({ phpbooks }: PhpBookProps) => {
  return (
    <div>
      {phpbooks.data.map((phpbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={phpbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={phpbook.params?.largeImageUrl}
                  alt={phpbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {phpbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{phpbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {phpbook.params?.salesDate}発売/
                  {phpbook.params?.publisherName}/{phpbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {phpbook.params?.itemPrice}円(税込)
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

export default PhpBooks;
