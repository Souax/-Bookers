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
      {allbooks.data.map((book) => (
        <div
          className="flex items-center pt-[5rem] mx-[6rem]"
          key={book.params.booksGenreId}
        >
          <div className="flex items-center">
            <Link href={`AllBooks/${book.params.booksGenreId}`}>
              <div className="flex items-start ml-[13.5rem]">
                <Image
                  src={book.params.largeImageUrl}
                  alt={book.params.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
                <div className="text-white text-center text-[1.2rem] pt-[0.1rem] ml-[2.2rem]">
                  {book.params.title}
                </div>
                <div className="flex text-white text-left text-[0.78rem] my-[3rem] pt-[-0.7rem]">
                  {book.params.author}
                </div>
                <div className="text-white text-[0.78rem] ml-[-9.5rem] pt-[8rem]">
                  {book.params.salesDate}発売/{book.params.publisherName}/
                  {book.params.size}
                </div>
                <div className="text-white text-[1.05rem] ml-[-14.5rem] pt-[10rem]">
                  価格: {book.params.itemPrice}円(税込)
                </div>
              </div>
            </Link>
            <div className={styles.book_bottom_line}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
