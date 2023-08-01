import { theme } from '@/styles';
import styled from 'styled-components';
import { ProjectLight } from './utils/ProjectLight';

const ProjectMainStyle = styled.div`
  overflow-x: hidden;

  .project-main {
  padding: 60px 20px;
  background-color: ${theme.color.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  }

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

  .project-img {
    position: absolute;
    bottom: -80px;
  }

  .title {
    padding: 40px 0px 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    &-text {
      font-size: 26px;
      color: ${theme.color.dark};
    }

    span {
      color: ${theme.color.flare};
    }
  }

  .project-tab {
    border-top: 1px solid ${theme.color.detail};
  }

  @media (min-width: 1027px) {
    .project-tab {
    border-top: none;
    }
  }
`

const ProjectMain = () => {
  return (
    <ProjectMainStyle>
      <div className='project-main'>
        <h1>Eu torno minhas <span>ideias</span> em <span>realidade</span></h1>
      </div>

      <div className='title'>
        <h1 className='title-text'>Meus <span>Projetos</span></h1>
      </div>

      <div className='project-tab'>
      <ProjectLight
      dark={true}
      href="/home"
      title="Storee"
      description="React, Next & Node"
      src="/images/project-01.png"
      skills={['React', 'Next', 'Node']} />

      <ProjectLight
      dark={true}
      href="/"
      title="AeroTour"
      description="React, Next & Node"
      src="/images/project-01.png"
      skills={['React', 'Next', 'MySQL']} />

      <ProjectLight
      dark={true}
      href="/"
      title="Storee"
      description="React, Next & Node"
      src="/images/project-01.png" />

      <ProjectLight
      dark={true}
      href="/"
      title="Storee"
      description="React, Next & Node"
      src="/images/project-01.png" />

      <ProjectLight
      dark={true}
      href="/"
      title="Storee"
      description="React, Next & Node"
      src="/images/project-01.png" />

      <ProjectLight
      dark={true}
      href="/"
      title="Storee"
      description="React, Next & Node"
      src="/images/project-01.png" />
      </div>
    </ProjectMainStyle>
  )
}

export { ProjectMain };

