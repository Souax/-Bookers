"use client";
import React from "react";
import { signOut } from "next-auth/react";
import axios from "axios";

type DeleteButtonProps = {
  email: string;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ email }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(`${apiUrl}/users/${email}`);
      if (response.status === 204) {
        console.log("アカウントが削除されました。");
        signOut();
      } else {
        console.error("アカウント削除に失敗しました。");
      }
    } catch (error) {
      console.error("エラーが発生しました。", error);
    }
  };

  return <button onClick={handleDeleteUser}>アカウントを削除する</button>;
};

export default DeleteButton;
