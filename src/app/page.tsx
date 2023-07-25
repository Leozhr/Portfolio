'use client';
import { Intro } from "@/components/animation/Intro";
import { GlobalContext } from "@/hooks/GlobalStore";
import React from "react";
import styled from "styled-components";
import { About } from "./components/About";
import { Main } from "./components/Main";

const HomeStyle = styled.div`
    .active * {
      animation: none;
    }
`

export default function Home() {
  const { Active } = React.useContext(GlobalContext);

  return (
      <>
        <Intro />
        <Main />
        <About />
      </>
  )
}
