import React from "react";

export default function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-lg mb-4">Let’s work together! Reach me at:</p>
      <p className="font-semibold">
        💼{" "}
        <a
          href="https://www.linkedin.com/in/josephadames/"
          className="text-indigo-600 underline"
        >
          LinkedIn
        </a>
      </p>
      <p className="font-semibold">
        🌐{" "}
        <a
          href="https://github.com/JoeAdames"
          className="text-indigo-600 underline"
        >
          GitHub
        </a>
      </p>
    </section>
  );
}
