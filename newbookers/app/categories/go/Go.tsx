import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type GoBookProps = {
  gobooks: ApiResponse;
};

const GoBooks = ({ gobooks }: GoBookProps) => {
  return (
    <div>
      {gobooks.data.map((gobook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={gobook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={gobook.params?.largeImageUrl}
                  alt={gobook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">{gobook.params?.title}</div>
                <div className="pb-[2.5rem]">{gobook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {gobook.params?.salesDate}発売/
                  {gobook.params?.publisherName}/{gobook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {gobook.params?.itemPrice}円(税込)
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

export default GoBooks;
