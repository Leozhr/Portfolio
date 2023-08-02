import { useWidthPage } from "@/functions/WidthPage";
import { theme } from "@/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
      cursor: pointer;
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

  @media (min-width: 1027px) {
    .about {
      padding: 120px 0px;

    p {
      font-size: 26px;
      padding: 34px 0px;
    }
    
    &-info {
      margin: 0;
    }

    &-title {
      display: flex;
      padding: 10px 20px 10px 15px;

      span { font-size: 16px; font-family: ${theme.font.family.poppins}; }
    }

    &-button {
      margin: 0;

      &-container { padding: 0; }
      &-info { h1 { font-size: 20px; } }
    }
  }

  .container {
    display: grid;
    gap: 60px;
    grid-template-columns: 1fr 300px;
    margin: 0px 10%;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;

    &-img { border-radius: 12px; }
  }   
  }

  @media (min-width: 1650px) { 
    .container {
      margin: 0px 20%;
      gap: 100px;
    }
}
`

const About = () => {
  const widthPage = useWidthPage();
  const router = useRouter();

  const goToAbout = () => {
    router.push("/profile");
  }

  return (
    <AboutStyle>
    <section className="container">
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

        <div className="about-button" onClick={goToAbout}>
          <div className="about-button-container">
            <div className="about-button-info">
              <Image src="/images/code.svg" height={20} width={20} alt="Code" />
              <h1>Mais Detalhes</h1>
            </div>

            <Image src="/images/arrow.svg" height={16} width={16} alt="Arrow" />
          </div>
        </div>
      </div>

      { widthPage > 1027 && <div className="profile">
        <Image src="/images/about-profile.png" height={300} width={250} alt="Logo"
        className="profile-img" />
      </div>}
      </section>
    </AboutStyle>
  )
}

export { About };

