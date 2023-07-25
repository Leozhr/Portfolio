'use client';
import { theme } from "@/styles";
import { useState } from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
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
`;

const Header = () => {
  const [Menu, SetMenu] = useState(false);

  return (
    <HeaderStyle>
      <nav>
        <Logo light={false} />

        <div className={`${Menu ? "main" : ""} menu`}
         onClick={() => SetMenu(!Menu)}>
          <div className="menu-space">
            <span />
            <span />
          </div>
        </div>
      </nav>

      <Main main={Menu} />
    </HeaderStyle>
  )
}

export { Header };

