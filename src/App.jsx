import { useState } from "react";
import { GithubProvider } from "./context/GithubProvider";
import Projects from "./components/Projects";
import Repositories from "./components/Repositories";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <GithubProvider>
      <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        <Header />

        <main className="container mx-auto px-4 py-10 flex-1">
          {/* About Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-lg">
              I’m a Senior Front-End Developer with 6+ years of experience
              building responsive, modern web applications. I specialize in
              React.js, TailwindCSS, and creating scalable UI systems.
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "React.js",
                "Next.js",
                "TailwindCSS",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "SQL",
                "Python",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 px-3 py-1 rounded text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
          <Projects />
          <Repositories />

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-lg mb-4">Let’s work together! Reach me at:</p>
            <p className="font-semibold">
              💼{" "}
              <a
                href="https://www.linkedin.com/in/josephadames/"
                className="text-indigo-600 underline"
              >
                LinkedIn
              </a>
            </p>
            <p className="font-semibold">
              🌐{" "}
              <a
                href="https://github.com/JoeAdames"
                className="text-indigo-600 underline"
              >
                GitHub
              </a>
            </p>
          </section>
        </main>

        <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} J A. All rights reserved.
        </footer>
      </div>
    </GithubProvider>
  );
}

export default App;
