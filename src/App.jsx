import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Joseph Adames</h1>
            <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
              Available for Hire
            </span>
          </div>
        </header>

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

          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Card */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Custom Component Library
                </h3>
                <p>
                  Built and documented a responsive, object-oriented UI library
                  for enterprise use, reducing design meeting time by 50%.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Client Billing Portal
                </h3>
                <p>
                  Developed a self-service billing & shipping portal integrating
                  PayPal and Stripe APIs to automate manual processes.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-lg mb-4">Let’s work together! Reach me at:</p>
            {/* <p className="font-semibold">📧 yourname@email.com</p> */}
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
    </>
  );
}

export default App;
