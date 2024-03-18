"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Session } from "next-auth";

const Logout = ({ session }: { session: Session | null }) => {
  if (session) {
    return (
      <div>
        <button onClick={() => signOut()}>ログアウト</button>
      </div>
    );
  }
  return null;
};

export default Logout;
