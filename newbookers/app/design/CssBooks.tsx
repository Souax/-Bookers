import { ApiResponse } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../BookList.module.css";

type CssBookListProps = {
  cssbooks: ApiResponse;
};

const CssBookList = ({ cssbooks }: CssBookListProps) => {
  return (
    <div>
      {cssbooks.data.map((cssbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={cssbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={cssbook.params?.largeImageUrl}
                  alt={cssbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {cssbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{cssbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {cssbook.params?.salesDate}発売/
                  {cssbook.params?.publisherName}/{cssbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {cssbook.params?.itemPrice}円(税込)
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

export default CssBookList;
