import { Button } from "@/components/Button";
import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

const MainStyle = styled.main`
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    padding: 16px 0px 30px;
    font-size: 14px;
    color: ${theme.color.detail};
    line-height: 20px;
  }

  span {
    color: ${theme.color.detail};
    font-weight: 700;
  }

  .title {
    font-size: 12px;

    h1 {
      font-weight: 600;
      line-height: 26px;
    }
  }

  .intro-img {
    margin: 0px 0px 20px;
    border-radius: 100px;
    border: 1px solid ${theme.color.detail};
  }

  .profile {
    display: grid;
    grid-template-columns: 1fr max-content;

    &-img {
      display: none;
      border-radius: 100%;
      border: 1px solid ${theme.color.detail};
    }
  }
`

const Main = () => {
  return (
    <MainStyle className="container">
      <div className="title">
        <Image src="/images/leonardo.png" height={120} width={120} alt="Logo"
        className="intro-img" />

        <div className="profile">
          <h1>Me chamo Leonardo,</h1>
          <Image src="/images/leonardo.png" height={42} width={42} alt="Logo"
          className="profile-img" />
        </div>
        <h1>Desenvolvedor FullStack</h1>
      </div>

      <p>
        Desenvolvedor FullStack apaixonado por criar interfaces intuitivas e funcionais, 
        combinando expertise em <span>Frontend</span>, <span>Backend</span> e <span>UI design</span>.
      </p>

      <Button text="Entre em Contato" href="/contato" />
      <Button text="Projetos" href="/contato" />
    </MainStyle>
  )
}

export { Main };

