import React from "react";

export default function Skills() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
          <span
            key={skill}
            className="bg-gray-200 px-3 py-1 rounded text-center"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
