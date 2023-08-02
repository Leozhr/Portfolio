'use client';
import { LinkToCheck } from "@/functions/LinkToCheck";
import { useWidthPage } from "@/functions/WidthPage";
import { theme } from "@/styles";
import Link from "next/link";
import { useState } from "react";
import styled, { StyleSheetManager } from "styled-components";
import { Logo } from "../Logo";
import { LinkActive } from "../animation/LinkActive";

const HeaderStyle = styled.header<{ dark: any }>`
  border-bottom: 1px solid ${theme.color.detail};
  height: 80px;
  display: flex;
  align-items: center;
  background: ${({ dark }) => dark ? theme.color.dark : theme.color.light};
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 20px;
  }

  .menu {
    display: flex;
    border: 1px solid ${theme.color.detail};
    border-radius: 100%;
    cursor: pointer;
    background-color: ${({ dark }) => dark ? '#141414' : 'white'};
    height: 55px;
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;

    &-space {
      width: 28px;
      height: 13px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }
  }

  .main .menu-space {
    height: 2px;
  }

  .menu span {
    width: 100%;
    height: 2px;
    background-color: ${({ dark }) => dark ? `${theme.color.light}` : `${theme.color.dark}`};
    display: block;
    border-radius: 10px;
    transition: all 0.2s linear;
  }

  .main.menu span:nth-child(1) {
    transform: rotate(-45deg);
    position: absolute;
  }

  .main.menu span:nth-child(2) {
    transform: rotate(45deg);
    position: absolute;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    font-size: 18px;
    text-transform: uppercase;
    color: ${theme.color.flare};

    .link:hover {
      color: ${theme.color.dark};
    }

    .active { color: ${theme.color.dark}; }
  }

  .dark {
    background: ${theme.color.dark};
  }

  @media (min-width: 1027px) { padding: 0px 10%; }
`;

const MenuStyle = styled.div`
.menu-tab {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  z-index: 10;
  background: ${theme.color.dark};
  height: 0px;
  transition: all 0.3s;
  }

  .bg {
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }

  .menu-nav {
    height: 100%;
    display: none;
    align-items: center;
    justify-content: space-around;

    .link-tab {
      height: max-content;
      color: ${theme.color.light};
      font-size: 16px;
      padding: 5px 10px;
      cursor: pointer;
      background-color: ${theme.color.opacity};
      border-radius: 8px;
    }
  }

  .active-tab {
    height: 120px;
    border-bottom: 1px solid ${theme.color.detail};

    .menu-nav {
      display: flex;
      animation: tabs 0.5s linear forwards;
    }

    @keyframes tabs {
      0% {
        transform: translateY(15px);
        opacity: 0.5;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }

  .active {
    border: 1px solid ${theme.color.light};
  }
`

const Header = () => {
  const [Menu, SetMenu] = useState(false);
  const darkMode = LinkToCheck();
  const widthPage = useWidthPage();

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "dark"}>
    <HeaderStyle dark={darkMode ? 'true' : ''}>
      <nav>
        <Link href='/'><Logo light={darkMode ? true : false} /></Link>

        {widthPage <= 1027 && <div className={`${Menu ? "main" : ""} menu`}
         onClick={() => SetMenu(!Menu)}>
          <div className="menu-space">
            <span />
            <span />
          </div>
        </div>}

        {widthPage > 1027 && <div>
          <ul className="navigation">
            <LinkActive href='/profile' className="link">Sobre mim</LinkActive>
            <LinkActive href='/project' className="link">Projetos</LinkActive>
            <LinkActive href='/contact' className="link">Contatos</LinkActive>
          </ul>
        </div>}
      </nav>

      <MenuStyle>
        {Menu && <div className="bg" onClick={() => SetMenu(!Menu)} />}
        <div className={`${Menu ? "active-tab" : ""} menu-tab`}>
          <div className='menu-nav'>
            <LinkActive href='/profile' className="link-tab">Sobre mim</LinkActive>
            <LinkActive href='/project' className="link-tab">Projetos</LinkActive>
            <LinkActive href='/contact' className="link-tab">Contatos</LinkActive>
          </div>
        </div>
    </MenuStyle>
    </HeaderStyle>
    </StyleSheetManager>
  )
}

export { Header };

