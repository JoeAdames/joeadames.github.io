import React, { useEffect, useState } from "react";
import { useGithub } from "../context/GithubProvider";

export default function Repositories() {
  const { repos, error, loading } = useGithub();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Repositories</h2>
        <span className="text-black-50 text-sm">Sorted by Last Updated</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4 ">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">{repo.name}</h3>
              <a
                href={repo.html_url}
                target="_blank"
                className="inline-block px-6 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition"
              >
                Link
              </a>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-black-50 text-sm">
                Created:{" "}
                {new Date(repo.created_at).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
              <span className="text-black-50 text-sm">
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
