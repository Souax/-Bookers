import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type JqueryBookProps = {
  jquerybooks: ApiResponse;
};

const JqueryBooks = ({ jquerybooks }: JqueryBookProps) => {
  return (
    <div>
      {jquerybooks.data.map((jquerybook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={jquerybook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={jquerybook.params?.largeImageUrl}
                  alt={jquerybook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {jquerybook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{jquerybook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {jquerybook.params?.salesDate}発売/
                  {jquerybook.params?.publisherName}/{jquerybook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {jquerybook.params?.itemPrice}円(税込)
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

export default JqueryBooks;
