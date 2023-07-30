'use client';
import { useWidthPage } from "@/functions/WidthPage";
import { theme } from "@/styles";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
import { LinkActive } from "../animation/LinkActive";
import { Main } from "./Main";

const HeaderStyle = styled.header`
  border-bottom: 1px solid ${theme.color.detail};
  height: 80px;
  display: flex;
  align-items: center;
  background: ${theme.color.light};

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
    background-color: white;
    height: 55px;
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;

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
    background-color: ${theme.color.dark};
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


  @media (min-width: 1027px) { padding: 0px 10%; }
`;

const Header = () => {
  const [Menu, SetMenu] = useState(false);
  const widthPage = useWidthPage();

  return (
    <HeaderStyle>
      <nav>
        <Link href='/'><Logo light={false} /></Link>

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

      <Main main={Menu} />
    </HeaderStyle>
  )
}

export { Header };

