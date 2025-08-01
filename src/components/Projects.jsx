import React from "react";
import stories from "../Stories.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-16">
      <div className="flex justify-evenly gap-x-4 py-8">
        <ProjectCard
          name={"ruCompliant"}
          link={"https://rucompliant.vercel.app/"}
          description={"Security Audit"}
          image={"./rucompliant.png"}
          techList={[
            "React.js",
            "Controlled-Forms",
            "TailwindCSS",
            "Context API",
            "LocalStorage",
          ]}
        />
        <ProjectCard
          name={"Adcock Furniture"}
          link={"https://adcockfurniture.com/"}
          description={"Completed project from Storis with Adcock furniture"}
          image={"./adcock.png"}
          techList={[
            "NOPCommerce CMS",
            "HTML",
            "CSS",
            "Grid",
            "JavaScript",
            "jQuery",
            "Figma",
          ]}
        />
        <ProjectCard
          name={"WTWGBLT"}
          link={"#"}
          description={"Whats the Weather Gonna Be like Today"}
          image={"./WTWGBLT.png"}
          techList={[
            "React.js",
            "TailwindCSS",
            "Weather.gov API",
            "ControlledForms",
            "Context API",
          ]}
        />
      </div>
      <div className="flex flex-col gap-y-8 text-right sm:text-left pt-16">
        {stories.map((story, i) => (
          <div key={i} className="flex flex-col gap-y-2">
            <h3 className="text-3xl font-semibold">{story.name}</h3>
            <p className="text-base font-light">{story.shortDescription}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
