'use client';
import { theme } from "@/styles";
import { useRouter } from 'next/navigation';
import styled from "styled-components";

const ButtonStyle = styled.button`
  background: white;
  margin-bottom: 10px;
  padding: 15px 0px;
  width: 80%;
  border-radius: 30px;
  border: 1px solid ${theme.color.detail};
  transition: 0.2s all linear;
  
  h1 {
    color: ${theme.color.dark};
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
  }

  &:hover {
    background: ${theme.color.dark};

    h1 { 
      color: ${theme.color.light};
    }
  }

  .link {
    height: 100%;
    background-color: red;
  }

  @media (min-width: 1440px) {
    padding: 20px 0px;
    margin: 0;

    h1 { font-size: 20px; }
  }

  @media (min-width: 1650px) { border: 1px solid ${theme.color.flare}; }
`

interface ButtonProps {
  text: string;
  href: string;
}

const Button = ({ text, href }: ButtonProps) => {
  const router = useRouter();

  return (
      <ButtonStyle onClick={() => router.push(href)}>
          <span className="change"/>
          <h1>{text}</h1>
      </ButtonStyle>
  )
}

export { Button };

