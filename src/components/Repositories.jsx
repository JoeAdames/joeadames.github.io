import React, { useEffect, useState } from "react";
import { useGithub } from "../context/GithubProvider";

export default function Repositories() {
  const { repos, error, loading } = useGithub();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="py-16">
      <div className="flex justify-between items-center py-4">
        <span className="text-base font-light">Sorted by Last Updated</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repos.map((repo, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">{repo.name}</h3>
              <a
                href={repo.html_url}
                target="_blank"
                className="inline-block px-6 bg-black text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 hover:scale-105 transition-transform duration-300"
              >
                Link
              </a>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-base font-light">
                Created:{" "}
                {new Date(repo.created_at).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
              <span className="text-base font-light">
                Updated:{" "}
                {new Date(repo.updated_at).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
