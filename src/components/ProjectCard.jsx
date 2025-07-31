import React from "react";

export default function ProjectCard({
  name,
  link,
  description,
  image,
  techList,
}) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] duration-300">
      <img
        src={image}
        alt="Project screenshot"
        className="w-full h-48 object-cover"
      />

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-slate-800">{name}</h3>

        <div className="flex flex-wrap gap-2 text-sm">
          {techList.map((item, i) => (
            <span
              key={`item-${i}`}
              className="bg-slate-100 text-slate-700 px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>

        <div className="flex justify-between items-center">
          <a
            href={link}
            target="_blank"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}
