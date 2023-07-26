import { theme } from '@/styles';
import styled from 'styled-components';

const SkillDetailStyle = styled.header`
  padding: 25px 0px;
  border-bottom: 1px solid ${theme.color.detail};

  .skill {
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-stack {
      display: flex;  
      align-items: center;
      gap: 15px;

      h1 {
        font-family: ${theme.font.family.jakarta};
        text-transform: uppercase;
        font-size: 20px;
      }

      span {
        font-size: 16px;
        color: ${theme.color.detail};
      }
    }

    &-value {
      font-size: 20px;
      font-family: ${theme.font.family.jakarta};
    }
  }
`

type SkillDetailProps = {
  position: string;
  skillStack: string;
  skillValue: number;
}

const SkillDetail = ({ position, skillStack, skillValue	}: SkillDetailProps) => {
  return (
    <SkillDetailStyle>
      <div className='skill'>
        <div className='skill-stack'>
          <span>{position}</span>
          <h1>{skillStack}</h1>
        </div>

        <span className='skill-value'>{skillValue + '%'}</span>
      </div>
      
    </SkillDetailStyle>
  )
}

export { SkillDetail };

