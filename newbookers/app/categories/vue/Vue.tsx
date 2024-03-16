import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type VueBookProps = {
  vuebooks: ApiResponse;
};

const VueBooks = ({ vuebooks }: VueBookProps) => {
  return (
    <div>
      {vuebooks.data.map((vuebook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={vuebook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={vuebook.params?.largeImageUrl}
                  alt={vuebook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {vuebook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{vuebook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {vuebook.params?.salesDate}発売/
                  {vuebook.params?.publisherName}/{vuebook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {vuebook.params?.itemPrice}円(税込)
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

export default VueBooks;
