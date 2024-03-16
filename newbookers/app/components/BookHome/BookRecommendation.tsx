import Image from "next/image";
import React from "react";
import styles from "./BookHome.module.css";

const BookRecommendation = () => {
  return (
    <>
      <div className="pt-10">
        <div className={styles.book_title}>あなたにおすすめ！</div>
        <div className={styles.book_look}>もっと見る</div>
        <div className={styles.line} />
      </div>
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

export default BookRecommendation;
