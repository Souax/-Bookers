import { ApiResponse } from "../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../BookList.module.css";

type BaseBookProps = {
  basebooks: ApiResponse;
};

const BaseBooks = ({ basebooks }: BaseBookProps) => {
  return (
    <div>
      {basebooks.data.map((basebook) => (
        <div
          className="flex items-center pt-[5rem] mx-[6rem]"
          key={basebook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <Link href={`base/${basebook.params?.booksGenreId}`}>
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
                <div className="ml-3">
                  <div className="text-white">{basebook.params?.title}</div>
                  <div className="text-white">{basebook.params?.author}</div>
                  <div className="text-white">
                    {basebook.params?.salesDate}発売/
                    {basebook.params?.publisherName}/{basebook.params?.size}
                  </div>
                  <div className="text-white">
                    価格: {basebook.params?.itemPrice}円(税込)
                  </div>
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

export default BaseBooks;
