import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";
import { Logo } from "../Logo";

const HeaderStyle = styled.header`
  border-bottom: 1px solid ${theme.color.detail};
  height: 80px;
  display: flex;
  align-items: center;

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
    padding: 13px;
    border-radius: 100%;
    cursor: pointer;
    background-color: white;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <Logo light={false} />

        <div className="menu">
          <Image src="/images/menu.svg" height={24} width={24} alt="Logo" />
        </div>
      </nav>
    </HeaderStyle>
  )
}

export { Header };

