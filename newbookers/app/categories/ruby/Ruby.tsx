import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../BookList.module.css";

type RubyBookProps = {
  rubybooks: ApiResponse;
};

const RubyBooks = ({ rubybooks }: RubyBookProps) => {
  return (
    <div>
      {rubybooks.data.map((rubybook) => (
        <div
          className="flex items-center pt-[5rem] mx-[21rem]"
          key={rubybook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <div className="flex">
              <div>
                <Image
                  src={rubybook.params?.largeImageUrl}
                  alt={rubybook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <div className="text-[1.4rem] pb-3">
                  {rubybook.params?.title}
                </div>
                <div className="pb-[2.5rem]">{rubybook.params?.author}</div>
                <div className="pb-3 text-[0.8rem]">
                  {rubybook.params?.salesDate}発売/
                  {rubybook.params?.publisherName}/{rubybook.params?.size}
                </div>
                <div className="text-[1.3rem]">
                  価格: {rubybook.params?.itemPrice}円(税込)
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

export default RubyBooks;
