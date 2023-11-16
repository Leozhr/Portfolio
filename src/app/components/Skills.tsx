import { theme } from '@/styles';
import styled from 'styled-components';
import { SkillDetail } from './utils/SkillDetail';

const SkillsStyle = styled.header`
  padding: 60px 0px;

  .title {
    font-size: 26px;
    text-align: center;
    margin-bottom: 40px;

    span {
      color: ${theme.color.detail};
    }
  }

  .skills {
    border-top: 1px solid ${theme.color.detail};
  }

  @media (min-width: 1027px) {
    padding: 120px 0px;
    background-color: ${theme.color.dark};

    .title {
    font-size: 64px;
    margin-bottom: 100px;
    color: ${theme.color.light};
  }
  }
`

const Skills = () => {
  return (
    <SkillsStyle>
      <h1 className='title'>Minhas <span>Habilidades</span></h1>

      <div className='skills'>
        <SkillDetail
        position={'001'}
        skillStack='Next'
        skillValue={82} />

        <SkillDetail
        position={'002'}
        skillStack='React'
        skillValue={85} />

        <SkillDetail
        position={'003'}
        skillStack='Node'
        skillValue={70} />

        <SkillDetail
        position={'004'}
        skillStack='JavaScript'
        skillValue={94} />

        <SkillDetail
        position={'005'}
        skillStack='Typescript'
        skillValue={92} />

        <SkillDetail
        position={'006'}
        skillStack='MySQL'
        skillValue={72} />

        <SkillDetail
        position={'007'}
        skillStack='git'
        skillValue={80} />

        <SkillDetail
        position={'008'}
        skillStack='IU Design'
        skillValue={88} />

        <SkillDetail
        position={'009'}
        skillStack='Jest'
        skillValue={70} />
      </div>
    </SkillsStyle>
  )
}

export { Skills };

