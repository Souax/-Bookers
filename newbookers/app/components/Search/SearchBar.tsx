"use client";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";

const SearchBar = () => {
  const ref: any = useRef(null);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const seachQuery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    router.push(`/categories?q=${encodeURIComponent(query)}`);
  };

  const searchStart = async () => {
    let word = "web";
    const response = await axios.get(
      `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?api_key=${
        process.env.RAKUTEN_API_KEY
      }&query=${encodeURIComponent(word)}&language=ja-JP&hits=15`
    );
    console.log(response);
  };

  return (
    <div>
      <Box
        component={"form"}
        onSubmit={seachQuery}
        className="w-4/5 mx-auto my-3 flex items-center justify-center"
      >
        <TextField
          ref={ref}
          id="keyword"
          onChange={handleChange}
          placeholder="キーワードを入力..."
          className="text-white w-[50rem] rounded-md"
          inputProps={{
            style: {
              backgroundColor: "#ffffff",
              color: "black",
              borderRadius: "4px",
            },
          }}
        />
        <div className="px-2">
          <Button
            onClick={searchStart}
            type="submit"
            className="px-5 py-1.5 text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
          >
            <IoIosSearch className="text-[1.7rem]" />
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default SearchBar;
