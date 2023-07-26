'use client';
import { About } from "./components/About";
import { Cards } from "./components/Cards";
import { Main } from "./components/Main";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
      <>
        <Main />
        <About />
        <Cards />
        <Projects />
      </>
  )
}
