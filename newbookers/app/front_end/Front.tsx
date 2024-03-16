import { ApiResponse } from "../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../BookList.module.css";

type FrontBookProps = {
  frontbooks: ApiResponse;
};

const FrontBooks = ({ frontbooks }: FrontBookProps) => {
  return (
    <div>
      {frontbooks.data.map((frontbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={frontbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={frontbook.params?.largeImageUrl}
                  alt={frontbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {frontbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{frontbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {frontbook.params?.salesDate}発売/
                  {frontbook.params?.publisherName}/{frontbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {frontbook.params?.itemPrice}円(税込)
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

export default FrontBooks;
