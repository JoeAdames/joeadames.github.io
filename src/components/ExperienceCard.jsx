import React from "react";

export default function ExperienceCard({
  company,
  title,
  date,
  description,
  link,
}) {
  return (
    <div className="grid py-6 rounded-lg text-black gap-y-2 sm:text-center text-base font-semibold">
      <div className="flex flex-col sm:flex-row gap-x-2 sm:items-center sm:justify-center">
        <h1 className="text-3xl font-bold tracking-tight leading-snug text-black">
          {title}
        </h1>
        <h2 className="italic text-xl">{company}</h2>
        <h3 className="italic">{date}</h3>
        <a href={link} target="_blank" className="text-blue-500 underline">
          Link
        </a>
      </div>
      <p className="text-base font-light">{description}</p>
    </div>
  );
}
