import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

const LogoStyle = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  h1 {
    font-family: ${theme.font.family.poppins};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: -0.63px;
    font-size: 20px;
  }

  .light {
    filter: invert(1);
  }

  @media (min-width: 1027px) {
    gap: 10px;

    h1 {
      font-weight: 700;
    }

    .logo {
      transform: scale(1.2);
    }
  }
`

interface LogoProps {
  light: boolean;
}

const Logo = ({ light }: LogoProps) => {
  return (
    <LogoStyle className="">
      <Image src="/images/logo.svg" height={24} width={24} alt="Logo"
      className={`${light ? "light" : ""} logo`} />
      <h1 className={light ? "light" : ""}>
        Leonardo Leal
      </h1>
    </LogoStyle>
  )
}

export { Logo };

