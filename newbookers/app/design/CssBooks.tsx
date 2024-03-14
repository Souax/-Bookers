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
          className="flex items-center pt-[5rem] mx-[6rem]"
          key={cssbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <Link href={`css/${cssbook.params?.booksGenreId}`}>
              <div className="flex items-start ml-[13.5rem]">
                <Image
                  src={cssbook.params?.largeImageUrl.url}
                  alt={cssbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
                <div className="text-white text-center text-[1.2rem] pt-[0.1rem] ml-[2.2rem]">
                  {cssbook.params?.title}
                </div>
                <div className="flex text-white text-left text-[0.78rem] my-[3rem] pt-[-0.7rem]">
                  {cssbook.params?.author}
                </div>
                <div className="text-white text-[0.78rem] ml-[-9.5rem] pt-[8rem]">
                  {cssbook.params?.salesDate}発売/
                  {cssbook.params?.publisherName}/{cssbook.params?.size}
                </div>
                <div className="text-white text-[1.05rem] ml-[-14.5rem] pt-[10rem]">
                  価格: {cssbook.params?.itemPrice}円(税込)
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

export default CssBookList;
