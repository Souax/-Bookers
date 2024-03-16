import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type TypescriptBookProps = {
  typescriptbooks: ApiResponse;
};

const TypescriptBooks = ({ typescriptbooks }: TypescriptBookProps) => {
  return (
    <div>
      {typescriptbooks.data.map((typescriptbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={typescriptbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={typescriptbook.params?.largeImageUrl}
                  alt={typescriptbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {typescriptbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">
                  {typescriptbook.params?.author}
                </div>
                <div className="pb-3 text-[0.8rem]">
                  {typescriptbook.params?.salesDate}発売/
                  {typescriptbook.params?.publisherName}/
                  {typescriptbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {typescriptbook.params?.itemPrice}円(税込)
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

export default TypescriptBooks;
