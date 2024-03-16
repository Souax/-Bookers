import { ApiResponse } from "../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../BookList.module.css";

type WebBookProps = {
  webbooks: ApiResponse;
};

const WebBooks = ({ webbooks }: WebBookProps) => {
  return (
    <div>
      {webbooks.data.map((webbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={webbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={webbook.params?.largeImageUrl}
                  alt={webbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {webbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{webbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {webbook.params?.salesDate}発売/
                  {webbook.params?.publisherName}/{webbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {webbook.params?.itemPrice}円(税込)
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

export default WebBooks;
