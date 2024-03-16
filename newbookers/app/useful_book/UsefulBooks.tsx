import { ApiResponse } from "../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../BookList.module.css";

type UsefulBookProps = {
  usefulbooks: ApiResponse;
};

const UsefulBooks = ({ usefulbooks }: UsefulBookProps) => {
  return (
    <div>
      {usefulbooks.data.map((usefulbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={usefulbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={usefulbook.params?.largeImageUrl}
                  alt={usefulbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {usefulbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{usefulbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {usefulbook.params?.salesDate}発売/
                  {usefulbook.params?.publisherName}/{usefulbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {usefulbook.params?.itemPrice}円(税込)
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

export default UsefulBooks;
