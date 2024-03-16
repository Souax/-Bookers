import { ApiResponse } from "../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../BookList.module.css";

type BackBookProps = {
  backbooks: ApiResponse;
};

const BackBooks = ({ backbooks }: BackBookProps) => {
  return (
    <div>
      {backbooks.data.map((backbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={backbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={backbook.params?.largeImageUrl}
                  alt={backbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {backbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{backbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {backbook.params?.salesDate}発売/
                  {backbook.params?.publisherName}/{backbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {backbook.params?.itemPrice}円(税込)
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

export default BackBooks;
