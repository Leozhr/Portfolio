import { theme } from '@/styles';
import styled from 'styled-components';

const ProfileCardStyle = styled.div`
  border-bottom: 1px solid ${theme.color.hidden};

  .skill {
    padding: 30px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1, span, p {
      color: ${theme.color.light};
      font-family: ${theme.font.family.jakarta};
      font-size: 18px;
      text-transform: uppercase;
    }

    p {
      display: none;
    }
  }

  @media (min-width: 1027px) {
    border-bottom: 1px solid ${theme.color.hidden};

  .skill {
    padding: 35px 15%;
    position: relative;

    h1, span, p {
      font-family: ${theme.font.family.jakarta};
      font-size: 28px;
    }

    p {
      width: 100%;
      height: 100%;
      position: absolute;
      text-transform: inherit;
      font-family: ${theme.font.family.poppins};
      color: ${theme.color.detail};
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  }
`

type ProfileCardProps = {
  skill: string;
  duration: string;
  data: string;
  course: string;
}

const ProfileCard = ({ skill, duration, data, course }: ProfileCardProps) => {
  return (
    <ProfileCardStyle>
      <div className='skill'>
        <h1>{skill}</h1>
        <p>{course}</p>
        <span>{duration} ({data})</span>
      </div>
    </ProfileCardStyle>
  )
}

export { ProfileCard };

