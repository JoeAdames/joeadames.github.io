import React from "react";
import stories from "../Stories.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-16">
      <div className="flex justify-evenly gap-x-2 py-8">
        <ProjectCard
          name={"ruCompliant"}
          link={"https://rucompliant.vercel.app/"}
          description={"Security Audit"}
        />
        <ProjectCard name={""} link={""} description={""} />
        <ProjectCard name={""} link={""} />
        <ProjectCard name={""} link={""} />
      </div>
      <div className="flex flex-col gap-y-8 text-right sm:text-left pt-8">
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
