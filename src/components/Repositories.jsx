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
          <div key={i} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
            <a href={repo.html_url} target="_blank">
              Link
            </a>
            {/* <p>{repo.description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
