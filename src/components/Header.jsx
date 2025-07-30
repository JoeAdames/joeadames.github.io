import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-black to-gray-600 text-white py-6 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight leading-snug">
          Joseph Adames
        </h1>
        <a
          className="hover:scale-105 transition-transform duration-300"
          href="public\JDA_FED_JS.docx"
          download
        >
          <span className="bg-white text-black text-sm px-6 py-2 rounded-full cursor-pointer font-bold ">
            Download Resume
          </span>
        </a>
      </div>
    </header>
  );
}
