'use client';
import { theme } from '@/styles';
import styled from 'styled-components';

const SkillDetailStyle = styled.div`
  padding: 25px 0px;
  border-bottom: 1px solid ${theme.color.detail};
  position: relative;

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

  @media (min-width: 1027px) {
    padding: 45px 0px;
    transition: all .2s;

    .skill {
    padding: 0px 15%;

    &-stack {
      gap: 30px;

      h1 {
        color: ${theme.color.light};
        font-size: 32px;
      }

      span { font-size: 22px; }
    }

    &-value {
      font-size: 28px;
      color: ${theme.color.light};
    }
    }

    .stack { display: none; }

    &:hover {
      background-color: ${theme.color.hidden};
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

