import Image from "next/image";
import React from "react";
import styles from "./BookHome.module.css";

const Book = ({ book }: any) => {
  return (
    <>
      <div className={styles.book_title}>人気技術書</div>
      <div className={styles.book_look}>もっと見る</div>
      <div className={styles.line} />

      <div className="flex justify-center items-center pt-6">
        <div className="flex flex-col items-center mx-5">
          <Image
            src="/images/typescript.jpg"
            alt="Image 1"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">TypeScript入門</div>
        </div>
        <div className="flex flex-col items-center mx-5">
          <Image
            src="/images/ruby.jpg"
            alt="Image 2"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">Ruby入門</div>
        </div>
        <div className="flex flex-col items-center mx-5">
          <Image
            src="/images/typescript.jpg"
            alt="Image 1"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">TypeScript入門</div>
        </div>
      </div>

      {/* 二段目 */}
      <div className="flex justify-center items-center pt-6">
        <div className="flex flex-col items-center mx-5">
          <Image
            src="/images/typescript.jpg"
            alt="Image 1"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">TypeScript入門</div>
        </div>
        <div className="flex flex-col items-center mx-5">
          <Image
            src="/images/typescript.jpg"
            alt="Image 1"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">TypeScript入門</div>
        </div>
        <div className="flex flex-col items-center mx-5">
          <Image
            src="/images/typescript.jpg"
            alt="Image 1"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">TypeScript入門</div>
        </div>
      </div>
    </>
  );
};

export default Book;
