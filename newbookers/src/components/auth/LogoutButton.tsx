"use client";
import React from "react";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <div>
      <button onClick={() => signOut()}>ログアウト</button>
    </div>
  );
}

export default LogoutButton;
