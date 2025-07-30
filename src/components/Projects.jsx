import React from "react";
import stories from "../Stories.json";

export default function Projects() {
  return (
    <section className="py-16">
      <div className="flex flex-col gap-y-8">
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
