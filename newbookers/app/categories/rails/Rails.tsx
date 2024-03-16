import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type RailsBookProps = {
  railsbooks: ApiResponse;
};

const RailsBooks = ({ railsbooks }: RailsBookProps) => {
  return (
    <div>
      {railsbooks.data.map((railsbook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={railsbook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={railsbook.params?.largeImageUrl}
                  alt={railsbook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {railsbook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{railsbook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {railsbook.params?.salesDate}発売/
                  {railsbook.params?.publisherName}/{railsbook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {railsbook.params?.itemPrice}円(税込)
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

export default RailsBooks;
