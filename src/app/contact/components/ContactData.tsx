import { theme } from '@/styles';
import styled from 'styled-components';

const ContactDataStyle = styled.header`
  padding: 60px 20px 0px 20px;

  h1 {
    font-size: 26px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;

    span {
      color: ${theme.color.flare};
    }
  }

  .data {
    display: flex;
    flex-direction: column;
    gap: 15px;

    div {
      background-color: white;
      padding: 15px 20px;
      box-shadow: 0px 0px 2px #00000025;
      cursor: pointer;

      h2 {
        font-size: 16px;
      }
    }

    .cv {
      background-color: ${theme.color.dark};

        h2 {
          text-transform: uppercase;
          text-align: center;
          color: ${theme.color.light};
        }
      }
  }
`

const ContactData = () => {
  return (
    <ContactDataStyle>
      <h1>Meus <span>Dados</span></h1>

      <div className="data">
        <div>
          <h2>Leonardo.tech7@proton.me</h2>
        </div>

        <div>
          <h2>(12) 99640-7624</h2>
        </div>

        <div className='cv'>
          <h2>Abaixar Curriculo</h2>
        </div>
      </div>
    </ContactDataStyle>
  )
}

export { ContactData };

