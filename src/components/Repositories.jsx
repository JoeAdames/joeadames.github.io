import React from "react";
import { useGithub } from "../context/GithubProvider";

export default function Repositories() {
  const { repos, error, loading } = useGithub();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-4 flex justify-between"
          >
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <a
              href={repo.html_url}
              target="_blank"
              className="inline-block px-6 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition"
            >
              Link
            </a>
            {/* <p>{repo.description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
