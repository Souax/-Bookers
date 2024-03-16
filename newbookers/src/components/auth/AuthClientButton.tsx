"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import React from "react";
import axios from "axios";

const AuthClientButton = ({ session }: { session: Session | null }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const handleDeleteUser = async () => {
    if (!session || !session.user) {
      console.error("セッションが存在しません");
      return;
    }

    try {
      const response = await axios.delete(
        `${apiUrl}/users/${session.user.email}`
      );

      if (response.status === 204) {
        signOut();
      } else {
        console.error("アカウント削除に失敗しました");
      }
    } catch (error) {
      console.log("エラーだよ..。どうしよう。", error);
    }
  };

  return (
    <>
      {session ? (
        <div className="flex flex-col text-white">
          <div className="flex justify-center my-[3rem] text-xl">
            ようこそ {session.user && session.user.name}さん！
          </div>
          <div className="flex justify-center">
            <button className="pb-10" onClick={() => signOut()}>
              ログアウト
            </button>
            <button onClick={() => handleDeleteUser()}>
              アカウントを削除する
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col text-white text-xl">
          <p className="flex justify-center my-[3rem]">ログインしていません</p>
          <button className="pb-10" onClick={() => signIn()}>
            ログイン
          </button>
        </div>
      )}
    </>
  );
};

export default AuthClientButton;
