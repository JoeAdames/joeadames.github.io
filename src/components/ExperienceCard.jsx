import React from "react";

export default function ExperienceCard({
  company,
  title,
  date,
  description,
  link,
}) {
  return (
    <div className="grid p-6 rounded-lg text-black gap-y-2">
      <div className="flex gap-x-2 items-center ">
        <h1 className="font-bold text-xl text-black">{title}</h1>
        <h2 className="italic">{company}</h2>
        <h3 className="italic">{date}</h3>
        <a href={link} target="_blank" className="text-blue-500 underline">
          Link
        </a>
      </div>
      <p className="text-base font-light">{description}</p>
    </div>
  );
}
