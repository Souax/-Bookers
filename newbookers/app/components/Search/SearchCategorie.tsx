"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";

const SearchCategorie = () => {
  const [results, setResults] = useState([]);
  const router = useRouter();
  const { query: searchQuery } = router.query;

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `api/seachBooks?seachQuery=${searchQuery}`
        );
        const setResult = response.data.results;
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, [searchQuery]);
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default SearchCategorie;
