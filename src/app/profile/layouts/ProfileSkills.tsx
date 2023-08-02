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
`

const ProfileSkills = () => {
  return (
    <ProfileSkillsStyle>
       <div className='title'>
         <h1>Minhas <span>Compentências</span></h1>
       </div>

       <div className='university'>
         <h2>Análise e Des. de Sistemas</h2>

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
          data="2023" />

          <ProfileCard 
          skill="Node" 
          duration="50H" 
          data="2023" />

          <ProfileCard 
          skill="Javascript" 
          duration="74H" 
          data="2023" />

          <ProfileCard 
          skill="HTML & CSS" 
          duration="46H" 
          data="2023" />

          <ProfileCard 
          skill="UI Design" 
          duration="36H" 
          data="2023" />

          <ProfileCard 
          skill="UX Design" 
          duration="16H" 
          data="2023" />
       </div>
    </ProfileSkillsStyle>
  )
}

export { ProfileSkills };

