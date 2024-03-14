import { ApiResponse, BookType } from "../types/types";

/* 全ての本 */
export const getAllBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/search?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const allbooks = await res.json();
  return allbooks;
};

/* 基礎のところ */
export const getBaseBooks = async (): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/base`, {
    next: { revalidate: 1800 },
  });
  const basebooks = await res.json();
  return basebooks;
};

export const getCssBooks = async (): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/css`, {
    next: { revalidate: 1800 },
  });
  const cssbooks = await res.json();
  return cssbooks;
};
