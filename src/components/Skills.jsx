import React from "react";

export default function Skills() {
  return (
    <section className="py-16">
      <div className="w-full inline-flex flex-nowrap"></div>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {[
          "React.js",
          "Next.js",
          "TailwindCSS",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "SQL",
          "Python",
        ].map((skill) => (
          <li key={skill} className="bg-gray-200 px-3 py-1 rounded text-center">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
