"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import BookRecommendation from "./components/BookHome/BookRecommendation";
import Link from "next/link";
import Book from "./components/BookHome/BookHome";

export default function Home() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth / 2);

    const updateWidth = () => {
      setWidth(window.innerWidth / 2);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <>
      <div className="flex justify-center bg-[#3A3A3A]">
        <Image src="/images/books.png" alt="books" width={180} height={108} />
        <div className="flex flex-col text-center text-xl text-white pt-20 ml-2">
          Webエンジニアのための技術書データベース
        </div>
      </div>
      <div className="text-xl text-white text-center pt-4 pr-2">新刊書</div>
      <main className="flex justify-center items-center pt-6 pb-10">
        <Splide
          options={{
            rewind: true,
            width: width,
            perPage: 4,
            focus: "center",
            type: "loop",
            autoplay: true,
            perMove: 1,
          }}
        >
          <SplideSlide>
            <Image
              src="/images/typescript.jpg"
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/ruby.jpg"
              alt="Image 2"
              width={150}
              height={50}
              className="rounded-t-md"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/web_development.jpg"
              alt="Image 3"
              width={150}
              height={50}
              className="rounded-t-md"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/TCP_IP.jpg"
              alt="Image 4"
              width={135}
              height={50}
              className="rounded-t-md"
            />
          </SplideSlide>
        </Splide>
      </main>
      <Book />
      <BookRecommendation />
      <div className="flex justify-center items-center pb-10">
        <div className="flex mt-[3rem] bg-[#5A5A5A] rounded-full w-[40rem] py-[0.8rem] text-white text-center items-center justify-center cursor-pointer hover:bg-[#3A3A3A]">
          <Link href="/AllBooks" className="relative flex">
            全ての技術書を見る
          </Link>
        </div>
      </div>
    </>
  );
}
