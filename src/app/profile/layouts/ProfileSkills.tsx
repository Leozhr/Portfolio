import { useWidthPage } from '@/functions/WidthPage';
import { theme } from '@/styles';
import Image from 'next/image';
import styled from 'styled-components';
import { ProfileCard } from './utils/ProfileCard';

const ProfileSkillsStyle = styled.div`
  background-color: ${theme.color.dark};
  padding: 60px 0px;

  .title {
    display: flex;
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
        display: block;
      }
    }
  }

  .university {
    margin: 50px 15px 40px;
    padding: 20px 30px;
    background-color: ${theme.color.hidden};
    box-shadow: 0px 0px 2px #00000025;
    border-radius: 12px;

    h2 {
      color: ${theme.color.light};
      font-size: 18px;
    }

    ul {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      li {
        display: flex;
        gap: 8px;
        align-items: center;

        h3 {
          color: ${theme.color.detail};
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }

  .cards {
    border-top: 1px solid ${theme.color.hidden};
  }

  @media (min-width: 1027px) {
  padding: 160px 0px;
  overflow: hidden;

  .title {
    h1 {
      font-size: 62px;
      span { display: inline-block; }
    }
  }

  .university {
    margin: 150px 15% 100px 15%;
    padding: 30px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 28px;
    }

    ul {
      margin-top: 0px;
      gap: 12px;

      li {
        gap: 12px;

        h3 {
          font-size: 18px;
        }
      }
    }
  }
  }
`

const ProfileSkills = () => {
  const widthPage = useWidthPage();

  return (
    <ProfileSkillsStyle>
       <div className='title'>
         <h1>Minhas <span>Compentências</span></h1>
       </div>

       <div className='university'>
         <h2>Análise e {widthPage <= 1027 ? 'Des.' : 'Desenvolvimento'} de Sistemas</h2>

         <div className='university-list'>
           <ul>
            <li>
              <Image src="/images/local.svg" height={16} width={16} alt="Universidade Anhembi morumbi" />
              <h3>Universidade Anhembi Morumbi</h3>
            </li>
            <li>
              <Image src="/images/start.svg" height={16} width={16} alt="Universidade Anhembi morumbi" />
              <h3>10 de Junho de 2023</h3>
            </li>
            <li>
              <Image src="/images/end.svg" height={16} width={16} alt="Universidade Anhembi morumbi" />
              <h3>10 de Dezembro de 2025</h3>
            </li>
           </ul>
         </div>
       </div>

       <div className='cards'>
          <ProfileCard 
          skill="React" 
          duration="36H" 
          data="2023"
          course='Origamid: Formação Front-end Profissional' />

          <ProfileCard 
          skill="Node" 
          duration="50H" 
          data="2023"
          course='Udemy: Formação NodeJS Completo' />

          <ProfileCard 
          skill="Javascript" 
          duration="74H" 
          data="2023"
          course='Origamid: Formação Front-end Profissional' />

          <ProfileCard 
          skill="HTML & CSS" 
          duration="46H" 
          data="2023"
          course='Origamid: Formação Front-end Profissional' />

          <ProfileCard 
          skill="UI Design" 
          duration="36H" 
          data="2023"
          course='Origamid: Formação Front-end Profissional' />

          <ProfileCard 
          skill="UX Design" 
          duration="16H" 
          data="2023"
          course='Origamid: Formação Front-end Profissional' />
       </div>
    </ProfileSkillsStyle>
  )
}

export { ProfileSkills };

