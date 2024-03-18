import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const searchQuery = Array.isArray(req.query.searchQuery)
    ? req.query.searchQuery[0]
    : req.query.searchQuery;

  if (!searchQuery) {
    return res.status(400).json({ message: "検索結果がありません。" });
  }

  try {
    const response = await axios.get(
      `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?api_key=${
        process.env.RAKUTEN_API_KEY
      }&query=${encodeURIComponent(searchQuery)}&language=ja-JP&hits=15`
    );
    return res.status(200).json(response.data);
  } catch (error) {
    console.log("エラー内容は..", error);
    return res.status(500).json({ message: "エラーが発生しました。" });
  }
};
