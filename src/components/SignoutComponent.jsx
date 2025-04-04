"use client";
import { signOut } from "next-auth/react";
import React from "react";

const signoutComponent = () => {
  return (
    <button
      className="flex gap-4 items-center text-[#009990] font-bold text-xl hover:bg-gray-100 w-40 px-4 py-2 border rounded-full"
      onClick={() => signOut()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21.5002 13V15.26C21.5002 19.73 19.7102 21.52 15.2402 21.52H15.1102C11.0902 21.52 9.24016 20.07 8.91016 16.53"
          stroke="#009990"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.90039 7.55999C9.21039 3.95999 11.0604 2.48999 15.1104 2.48999H15.2404C19.7104 2.48999 21.5004 4.27999 21.5004 8.74999"
          stroke="#009990"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.9991 12H3.61914"
          stroke="#009990"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
          stroke="#009990"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Sign Out
    </button>
  );
};

export default signoutComponent;
