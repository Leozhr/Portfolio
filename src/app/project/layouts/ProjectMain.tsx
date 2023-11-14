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
    .project-main {
      padding: 120px 0px;
      box-shadow: 0px 0px 10px 0px ${theme.color.dark};
    }

    .project-tab {
      padding: 80px 10%;   
      border-top: none;
    }

    .project-main {
      h1 {
        font-size: 62px;
        line-height: 72px;
      }
    }

    .title {
      padding: 120px 0px 0px 0px;

      h1 {
      font-size: 64px;
      font-weight: 600;
      color: ${theme.color.dark};
      }
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
      href="https://iumovies.vercel.app/home/main"
      title="IUMovies"
      description="Angular, TypeScript & CSS"
      src="/images/projects/project-01.png"
      skills={['Angular', 'TypeScript', 'CSS']} />

      <ProjectLight
      dark={true}
      href="https://spotify-leozhr.vercel.app/login"
      title="Spotify Clone"
      description="Angular, TypeScript & CSS"
      src="/images/projects/spotifyweb.png"
      skills={['Angular', 'TypeScript', 'CSS']} />
      </div>
    </ProjectMainStyle>
  )
}

export { ProjectMain };

