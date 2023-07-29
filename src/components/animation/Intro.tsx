'use client';
import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

const IntroStyle = styled.div`
  position: fixed;
  width: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  background: #141414;
  z-index: 10;
  animation: close 5s linear forwards;
  z-index: 100;

  .intro {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    filter: invert();

    .title {
      position: relative;
      animation: transition 2.5s linear forwards;
    }

    .title h1 {
      font-family: ${theme.font.family.poppins};
      font-size: 22px;
      text-transform: uppercase;
      font-weight: 600;
    }

    .title span {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: #EBEBEB;
      z-index: 10;
      animation: block 2.5s linear forwards;
    }
  }

  .logo {
    animation: spiner 2.5s linear forwards;
  }

  @media (min-width: 1027px) {
    .intro {
      .title h1 { font-size: 28px; }
      .logo { transform: scale(1.5); }
    }   
  }
  

  @keyframes transition {
    0% {
      transform: translateY(0);
    }
    90% {
      margin-bottom: 0px;
      opacity: 1;
    }
    100% {
      opacity: 0;
      margin-bottom: 20px;
    }
  }

  @keyframes block {
    0% {
      width: 100%;
    }
    40% {
      width: 100%;
    }
    50% {
      width: 0%;
    }
    100% {
      width: 0%;
    }
  }

  @keyframes close {
    0% {
      height: 100vh;  
    }
    50% {
      height: 100vh;
    }
    60% {
      height: 0vh;
    }
    100% {
      height: 0vh;
    }
  }

  @keyframes spiner {
    0% {
      scale: 0;
    }
    10% {
      scale: 1;
    }
    20% {
      transform: rotate(-120deg);
    }
    40% {
      transform: rotate(-120deg);
    }
    50% {
      transform: rotate(70deg);
    }
    90% {
      transform: rotate(70deg);
      opacity: 1;
      margin-bottom: 0px;
    }
    100% {
      transform: rotate(70deg);
      opacity: 0;
      margin-bottom: 20px;
    }
  }
`

const Intro = () => {
  return (
    <IntroStyle>
      <div className="intro">
        <Image src="/images/logo.svg" height={36} width={36} alt="Logo"
        className="logo"/>
        <div className="title">
          <span />
          <h1>Leonardo Leal</h1>
        </div>
      </div>
    </IntroStyle>
  )
}

export { Intro };

