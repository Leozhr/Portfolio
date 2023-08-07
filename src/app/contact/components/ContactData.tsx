import { theme } from '@/styles';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const ContactDataStyle = styled.div`
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

        &:active {
          background: ${theme.color.opacity};  
        }
      }
  }
`

const ContactData = () => {
  const router = useRouter();

  const handleLink = () => {
    router.push("https://download848.mediafire.com/puqdhq121o3ggHKl_7M9zaq5351gMsDFwah5QrPBUye8VjYNJJOndShIsMvWSNaqa9Uk94opX0ghG0PmdUHAKpRZwNX4NCOd7y2Ed5MaRtNYllZOjPyjmAtvEJ3FpEFwQupu5mvDOwGngW0HLBUuOQ5wBCVTBVqke0qg-UNus-Yi/8tx2cohg5j9ajm1/Leonardo_CV-Tech.pdf");
  }

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

        <div className='cv' onClick={handleLink}>
          <h2>Abaixar Curriculo</h2>
        </div>
      </div>
    </ContactDataStyle>
  )
}

export { ContactData };

