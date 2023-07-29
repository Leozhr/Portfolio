import { theme } from '@/styles';
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
`

type ContactMainProps = {
  exemple: string
}

const ContactMain = () => {
  return (
    <ContactMainStyle>
      <h1>Eu adoraria ouvir você.</h1><span></span>
      <p>Olá! Se você é um <span>desenvolvedor</span> ou um <span>recrutador</span> interessado em meu trabalho, 
        fique à vontade para enviar uma mensagem. Estou sempre aberto a ouvir opiniões, 
        sugestões e oportunidades de trabalho.</p>
    </ContactMainStyle>
  )
}

export { ContactMain };

