import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type PythonBookProps = {
  pythonbooks: ApiResponse;
};

const PythonBooks = ({ pythonbooks }: PythonBookProps) => {
  return (
    <div>
      {pythonbooks.data.map((pythonbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={pythonbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={pythonbook.params?.largeImageUrl}
                  alt={pythonbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {pythonbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{pythonbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {pythonbook.params?.salesDate}発売/
                  {pythonbook.params?.publisherName}/{pythonbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {pythonbook.params?.itemPrice}円(税込)
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

export default PythonBooks;
