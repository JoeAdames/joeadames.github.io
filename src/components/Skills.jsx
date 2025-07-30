import React from "react";

export default function Skills() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
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
