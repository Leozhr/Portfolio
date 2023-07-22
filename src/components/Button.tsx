'use client';
import { theme } from "@/styles";
import { useRouter } from 'next/navigation';
import styled from "styled-components";

const ButtonStyle = styled.button`
  margin-bottom: 10px;
  background: white;
  width: 80%;
  height: 50px;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${theme.color.detail};
  transition: 0.2s all linear;
  
  h1 {
    color: ${theme.color.dark};
    font-size: 16px;
    text-transform: uppercase;
    font-family: ${theme.font.family.jakarta};
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

