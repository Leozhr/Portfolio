import { theme } from '@/styles';
import styled from 'styled-components';

const ProfileAboutStyle = styled.div`
  padding: 60px 15px;

  .title {
    display: flex;
    background-color: ${theme.color.dark};
    padding: 10px 0px;
    align-items: center;
    justify-content: center;

  h1 {
    color: ${theme.color.light};
    text-align: center;
    width: 20ch;
    line-height: 28px;
    font-size: 24px;

    span {
      color: ${theme.color.detail};
      }
    }
  }

  p {
    font-size: 14px;
    padding: 20px 0px 30px;
    line-height: 26px;
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    div {
      text-align: center;
      width: 100%;
      padding: 10px;
      background-color: white;
      box-shadow: 0px 0px 2px #00000025;

      h2 {
        font-size: 18px;
      }

      span {
        color: ${theme.color.flare};
      }
    }
  }
`

const ProfileAbout = () => {
  return (
    <ProfileAboutStyle>
      <div className='title'>
        <h1>Sobre <span>Mim</span></h1>
      </div>

      <p> Como um entusiasta da programação desde a infância, sempre busco oportunidades para evoluir e crescer profissionalmente. 
      Apaixonado por desafios e pela busca constante de conhecimento, estou sempre empenhado em aprender e me aprimorar.</p>

      <div className='cards'>
        <div>
          <h2>21 Anos</h2>
        </div>
        <div>
          <h2>Pindamonhangaba / <span>São Paulo</span></h2>
        </div>
      </div>

    </ProfileAboutStyle>
  )
}

export { ProfileAbout };

