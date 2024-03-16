import { ApiResponse } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../BookList.module.css";

type BookListProps = {
  allbooks: ApiResponse;
};

const BookList = ({ allbooks }: BookListProps) => {
  return (
    <div>
      {allbooks.data.map((allbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={allbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={allbook.params?.largeImageUrl}
                  alt={allbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {allbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{allbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {allbook.params?.salesDate}発売/
                  {allbook.params?.publisherName}/{allbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {allbook.params?.itemPrice}円(税込)
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

export default BookList;
