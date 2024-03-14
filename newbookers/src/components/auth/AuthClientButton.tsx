"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import React from "react";

const AuthClientButton = ({ session }: { session: Session | null }) => {
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
