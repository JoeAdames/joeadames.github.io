import React from "react";

export default function Contact() {
  return (
    <section className="flex gap-x-5 justify-self-end">
      <a
        href="https://www.linkedin.com/in/josephadames/"
        className="text-indigo-600 underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-[#0A66C2] hover:opacity-80 hover:scale-115 transition-transform duration-300"
        >
          <title>LinkedIn</title>
          <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.85-3.039-1.851 0-2.134 1.445-2.134 2.94v5.668H9.36V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.599 0 4.265 2.368 4.265 5.452v6.289zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.07 0-1.143.926-2.07 2.07-2.07 1.143 0 2.07.927 2.07 2.07 0 1.142-.927 2.07-2.07 2.07zM6.96 20.452H3.714V9h3.247v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
        </svg>
      </a>
      <a
        href="https://github.com/JoeAdames"
        className="text-indigo-600 underline"
      >
        <img
          src="https://cdn.simpleicons.org/github/181717"
          alt=""
          className="w-8 h-8 hover:scale-115 transition-transform duration-300"
        />
      </a>
    </section>
  );
}
