import { Button } from "@/components/Button";
import { Particles } from "@/components/animation/Particles";
import { useWidthPage } from "@/functions/WidthPage";
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
    color: ${theme.color.dark};
    line-height: 20px;
    animation: fade 3.6s linear forwards;
  }

  span {
    color: ${theme.color.dark};
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
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

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

  .media {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;

    div {
      display: flex;
      padding: 20px;
      background-color: white;
      border-radius: 50px;
      border: 1px solid ${theme.color.detail};
      cursor: pointer;
      transition: all 0.2s linear;
    }

    div:hover {
      filter: invert(1);
    }
  }

  @media (min-width: 1027px) {
    height: 95vh;
    align-items: inherit;
    text-align: inherit;
    padding: 0px 10%;
  
    .profile {
      justify-content: inherit;

      &-img { display: inherit; }
    }

    p {
      padding: 20px 0px 40px;
      font-size: 20px;
      line-height: 26px;
      font-weight: 600;
    }

    .title {
      font-size: 32px;
      h1 { line-height: 60px; }
    }

    .btn {
      display: flex;
      width: 50%;
      gap: 15px;
    }
  }

  @media (min-width: 1650px) {
    padding: 0px 20%;
    
    p {
      font-size: 26px;
      line-height: 32px;
      width: 100%;
      color: ${theme.color.flare};
    }

    span {
      color: ${theme.color.flare};
    }

    .title {
      font-size: 42px;
      h1 { line-height: 76px; }
    }

    .media {
      div { border: 1px solid ${theme.color.opacity}; }
    }
  }
`

const Main = () => {
  const widthPage = useWidthPage();

  return (
    <MainStyle>
      <Particles />
      <div className="title">
        {widthPage <= 1027 && <Image src="/images/leonardo.png" height={120} width={120} alt="Profile"
        className="intro-img" />}

        {widthPage > 1027 && (
          <div className="media">
            <div><Image src="/images/discord.svg" height={32} width={32} alt="Profile" /></div>
            <div><Image src="/images/github.svg" height={32} width={32} alt="Profile" /></div>
            <div><Image src="/images/linkedin.svg" height={32} width={32} alt="Profile" /></div>
          </div>
        )}

        <div className="profile">
          <h1>Me chamo Leonardo,</h1>
          { widthPage > 1027 && <Image src="/images/leonardo.png" height={70} width={70} alt="Profile"
          className="profile-img" /> }
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

