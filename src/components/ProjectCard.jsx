import React from "react";

export default function ProjectCard({ name, link, description }) {
  return (
    <div>
      <div>{name}</div>
      <a href={link} target="_blank">
        View
      </a>
      <p>{description}</p>
    </div>
  );
}
