"use client";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleDropdown} className="flex items-center">
        <AiOutlineUser />
      </button>
      {isOpen && (
        <div className="absolute mt-2 py-2 w-48 bg-white shadow-xl rounded-lg">
          <Link href="/profile">
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              プロフィール
            </a>
          </Link>
          <Link href="/logout">
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              ログアウト
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
