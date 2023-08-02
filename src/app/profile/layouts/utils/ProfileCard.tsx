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
      text-transform: inherit;
      font-family: ${theme.font.family.poppins};
      color: ${theme.color.detail};
      font-size: 16px;
    }
  }
`

type ProfileCardProps = {
  skill: string;
  duration: string;
  data: string;
}

const ProfileCard = ({ skill, duration, data }: ProfileCardProps) => {
  return (
    <ProfileCardStyle>
      <div className='skill'>
        <h1>{skill}</h1>
        <span>{duration} ({data})</span>
      </div>
    </ProfileCardStyle>
  )
}

export { ProfileCard };

