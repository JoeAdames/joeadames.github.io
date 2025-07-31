import React from "react";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.simpleicons.org/html5/E34F26",
    },
    {
      name: "CSS",
      icon: "https://cdn.simpleicons.org/css/1572B6",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    {
      name: "React.js",
      icon: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    {
      name: "Python",
      icon: "https://cdn.simpleicons.org/python/3776AB",
    },
    {
      name: "MySQL",
      icon: "https://cdn.simpleicons.org/mysql/4479A1",
    },
    {
      name: "PHP",
      icon: "https://cdn.simpleicons.org/php/777BB4",
    },
  ];
  return (
    <section className="py-16">
      <div className="overflow-hidden relative w-screen left-1/2 -translate-x-1/2">
        <ul className="flex gap-x-10 py-4 animate-infinite-scroll">
          {[...skills, ...skills].map((skill) => (
            <li key={skill.name} className="px-3 py-1 text-center">
              <img src={skill.icon} alt="icon" className="w-25 h-25" />
              <p className="text-base font-light w-25">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
