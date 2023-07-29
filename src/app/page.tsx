'use client';
import { Intro } from "@/components/animation/Intro";
import { useWidthPage } from "@/functions/WidthPage";
import { About } from "./components/About";
import { Cards } from "./components/Cards";
import { Main } from "./components/Main";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
  const widthPage = useWidthPage();

  return (
      <>
        <Intro />
        <Main />
        <About />
        { widthPage < 1027 && <Cards /> }
        <Projects />
        <Skills />
        { widthPage > 1027 && <Cards /> }
      </>
  )
}
