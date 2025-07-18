import React from "react";
import stories from "../Stories.json";

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
            <p>{story.shortDescription}</p>
          </div>
        ))}
        {/* Project Card */}
      </div>
    </section>
  );
}
