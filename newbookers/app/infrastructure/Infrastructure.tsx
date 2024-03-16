import { ApiResponse } from "../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../BookList.module.css";

type InfraBookProps = {
  infrabooks: ApiResponse;
};

const InfraBooks = ({ infrabooks }: InfraBookProps) => {
  return (
    <div>
      {infrabooks.data.map((infrabook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={infrabook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={infrabook.params?.largeImageUrl}
                  alt={infrabook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {infrabook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{infrabook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {infrabook.params?.salesDate}発売/
                  {infrabook.params?.publisherName}/{infrabook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {infrabook.params?.itemPrice}円(税込)
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

export default InfraBooks;
