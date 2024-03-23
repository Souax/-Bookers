"use client";
import { ApiResponse } from "../../types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../BookList.module.css";

type BaseBookProps = {
  basebooks: ApiResponse;
};

const BaseBooks = ({ basebooks }: BaseBookProps) => {
  const [sortedBooks, setSortedBooks] = useState(basebooks.data);

  const BooksReview = () => {
    const sorted = [...sortedBooks].sort((a, b) => {
      const reviewA = Number(a.params?.reviewAverage) || 0;
      const reviewB = Number(b.params?.reviewAverage) || 0;
      return reviewB - reviewA;
    });
    console.log(sorted);
    setSortedBooks(sorted);
  };

  useEffect(() => {
    BooksReview();
  }, [basebooks.data]);

  return (
    <div>
      <button
        onClick={BooksReview}
        className="my-4 bg-gray-500 hover:bg-gray-600 rounded"
      >
        レビュー順に並び替え
      </button>
      {sortedBooks.map((basebook) => (
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
                <div className="pb-[0.5rem]">{basebook.params?.author}</div>
                <div className="pb-[2rem]">
                  ⭐️{basebook.params?.reviewAverage}
                </div>
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
