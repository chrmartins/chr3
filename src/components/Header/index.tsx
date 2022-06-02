import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex justify-between items-center">
        <h1 className="text-xl  m-2 px-4 py-2">chrmartins</h1>
        <Link href="https://www.linkedin.com/in/chrmartins/" target="_blank">
          <a>
            <FaLinkedin size={24} className={`mt-1`}  />
          </a>
        </Link>
      </div>
      <button
        className="m-4 px-6 py-2 rounded font-semibold  hover:text-tertiary-color transition-all 
        bg-gradient-to-r  from-[#ffcb3a] to-[#ff4f61] duration-300 ease-in-out"
      >
        Login
      </button>
    </header>
  );
}
