import { Button } from "@/components/Button";
import { Particles } from "@/components/animation/Particles";
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
  position: relative;
  overflow: hidden;

  p {
    padding: 16px 0px 30px;
    font-size: 14px;
    color: ${theme.color.hidden};
    line-height: 20px;
    animation: fade 3.6s linear forwards;
  }

  span {
    color: ${theme.color.hidden};
    font-weight: 700;
  }

  .title {
    font-size: 12px;
    animation: fade 3.3s linear forwards;

    h1 {
      font-weight: 700;
      line-height: 26px;
    }
  }

  .intro-img {
    margin: 0px 0px 20px;
    border-radius: 100px;
    border: 1px solid ${theme.color.detail};
    animation: fade 3s linear forwards;
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

  .btn {
    width: 100%;
    animation: fade 3.9s linear forwards;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0;
      transform: translate(-20px);
    }
    100% {
      opacity: 1;
      transform: translate(0px);
    }
  }
`

const Main = () => {
  return (
    <MainStyle>
      <Particles />
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

      <div className="btn">
        <Button text="Entre em Contato" href="/contato" />
        <Button text="Projetos" href="/contato" />
      </div>
    </MainStyle>
  )
}

export { Main };

