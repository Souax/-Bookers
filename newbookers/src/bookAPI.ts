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
export const getBaseBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/base?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const basebooks = await res.json();
  return basebooks;
};

/*　デザインのところ */
export const getCssBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/design?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const cssbooks = await res.json();
  return cssbooks;
};

/* CSのところ */
export const getComputerBooks = async (
  page: number = 1
): Promise<ApiResponse> => {
  const res = await fetch(
    `http://localhost:3001/api/v1/computer_science?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const computerbooks = await res.json();
  return computerbooks;
};

/* フロントエンドところ */
export const getFrontBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(
    `http://localhost:3001/api/v1/front_end?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const frontbooks = await res.json();
  return frontbooks;
};

/* バックエンドところ */
export const getBackBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(
    `http://localhost:3001/api/v1/back_end?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const backbooks = await res.json();
  return backbooks;
};

/* インフラところ */
export const getInfraBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(
    `http://localhost:3001/api/v1/infrastructure?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const infrabooks = await res.json();
  return infrabooks;
};

/* Web開発のところ */
export const getWebBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(
    `http://localhost:3001/api/v1/web_development?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const webbooks = await res.json();
  return webbooks;
};

/* 役立つ本のところ */
export const getUsefulBooks = async (
  page: number = 1
): Promise<ApiResponse> => {
  const res = await fetch(
    `http://localhost:3001/api/v1/useful_book?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const usefulbooks = await res.json();
  return usefulbooks;
};
