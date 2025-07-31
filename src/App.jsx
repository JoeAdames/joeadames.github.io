import { useState } from "react";
import { GithubProvider } from "./context/GithubProvider";
import Projects from "./components/Projects";
import Repositories from "./components/Repositories";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <GithubProvider>
      <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-10 flex-1">
          <Contact />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Repositories />
        </main>
        <Footer />
      </div>
    </GithubProvider>
  );
}

export default App;
