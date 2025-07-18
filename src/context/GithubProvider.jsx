import React, { useContext, createContext, useState, useEffect } from "react";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubUser() {
      try {
        const res = await fetch("https://api.github.com/users/JoeAdames/repos");
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubUser();
  }, []);
  return (
    <GithubContext.Provider value={{ repos, error, loading }}>
      {children}
    </GithubContext.Provider>
  );
};
export const useGithub = () => useContext(GithubContext);
