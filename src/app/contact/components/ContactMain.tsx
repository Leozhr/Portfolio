import { useWidthPage } from '@/functions/WidthPage';
import { theme } from '@/styles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const ContactMainStyle = styled.main`
  background: ${theme.color.dark};
  padding: 60px 20px;

  h1 {
    color: ${theme.color.light};
    font-size: 26px;
  }

  p {
    margin-top: 10px;
    color: ${theme.color.detail};
    font-size: 14px;
    line-height: 26px;

    span {
      color: ${theme.color.detail};
      font-weight: 700;
    }
  }

  @media (min-width: 1027px) {
    border-radius: 0px 0px 20px 0px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .contact-main { width: 80%; }
    h1 { font-size: 26px;}

    p {
      font-size: 14px;
      line-height: 25px;
      span { font-weight: 600; }
    }

    button {
      padding: 25px 0px;
      border-top: 1px solid ${theme.color.hidden};
      border-bottom: 1px solid ${theme.color.hidden};
      margin-top: 50px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: ${theme.color.dark};
      transition: all 0.3s;

      &:hover {
        padding: 25px 15px;
      }

      div {
        display: flex;
        align-items: center;
        gap: 15px;
      }

      span {
        color: ${theme.color.light};
        text-transform: uppercase;
        font-size: 18px;
      }
    }
  }

  @media (min-width: 1650px) {
    .contact-main { width: 65%; }
    h1 { font-size: 46px;}

    p {
      font-size: 18px;
      line-height: 33px;
    }

    button { span { font-size: 20px; } }
  }
`

const ContactMain = () => {
  const widthPage = useWidthPage();
  const router = useRouter();

  const handleLink = () => {
    router.push("https://drive.google.com/u/0/uc?id=1fHfuPZgsqd14pGizL1jIoTBfdpifB1c-&export=download");
  }

  return (
    <ContactMainStyle>
      <div className="contact-main">
        <h1>Eu adoraria ouvir você.</h1><span></span>
        <p>Olá! Se você é um <span>desenvolvedor</span> ou um <span>recrutador</span> interessado em meu trabalho, 
           fique à vontade para enviar uma mensagem. Estou sempre aberto a ouvir opiniões, 
           sugestões e oportunidades de trabalho.
           {widthPage >= 1027 ? ' Sinta-se à vontade para compartilhar sua visão ou ideias para aprimorar meus projetos e contribuir para o meu crescimento profissional.' : ''}</p>

        {widthPage >= 1027 && <button onClick={handleLink} type='button'>
          <div>
            <Image src="/images/code.svg" height={20} width={20} alt="Arrow" />
            <span>Abaixar Curriculo</span>
          </div>

          <Image src="/images/arrow.svg" height={20} width={20} alt="Arrow" />
        </button>}
      </div>
    </ContactMainStyle>
  )
}

export { ContactMain };

