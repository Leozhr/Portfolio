import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

const AboutStyle = styled.div`
  background: ${theme.color.dark};

  .about {
    padding: 60px 0px;

    p {
      color: ${theme.color.light};
      font-size: 16px;
      padding: 30px 0px;
    }

    p span {
      color: ${theme.color.detail};
    }

    &-info {
      margin: 0px 15px;
    }

    &-title {
      display: flex;
      align-items: center;
      gap: 3px;
      border: 1px solid ${theme.color.detail};
      padding: 5px 20px 5px 15px;
      border-radius: 30px;
      width: max-content;
      font-family: ${theme.font.family.jakarta};

      span {
        color: ${theme.color.detail};
        text-transform: uppercase;
        font-size: 14px;
      }
    }

    &-button {
      padding: 20px 0px;
      border-bottom: 1px solid ${theme.color.hidden};
      border-top: 1px solid ${theme.color.hidden};
      transition: .3s all;

      &-container {
        display: flex;
        align-items: center;
        padding: 0px 15px;
        justify-content: space-between;
        transition: all 0.5;
      }

      &-info {
        display: flex;
        align-items: center;
        font-family: ${theme.font.family.jakarta};
        text-transform: uppercase;
        gap: 10px;

        h1 {
          color: ${theme.color.light};
          font-size: 16px;
        }
      }
    }

    &-button .about-button-container {
      transition: .3s all;
    }

    &-button:hover .about-button-container {
      padding: 0px 25px;
    }
  }
`

const About = () => {
  return (
    <AboutStyle>
      <div className="about">
        <div className="about-info">
          <div className="about-title">
            <Image src="/images/user.svg" height={14} width={18} alt="About Us" />
            <span>Sobre Mim</span>
          </div>

          <p>
            Desenvolvedor web experiente com <span>habilidades</span> em criação 
            de <span>soluções criativas</span> e <span>interativas</span>.
          </p>
        </div>

        <div className="about-button">
          <div className="about-button-container">
            <div className="about-button-info">
              <Image src="/images/code.svg" height={20} width={20} alt="Code" />
              <h1>Mais Detalhes</h1>
            </div>

            <Image src="/images/arrow.svg" height={16} width={16} alt="Arrow" />
          </div>
        </div>

      </div>
    </AboutStyle>
  )
}

export { About };

