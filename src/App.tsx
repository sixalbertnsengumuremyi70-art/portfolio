import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Cv } from "./components/Cv";
import { Developer } from "./components/Developer";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHash();
  if (hash === "#cv") return <Cv />;

  return (
    <>
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-card focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
        <Developer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
