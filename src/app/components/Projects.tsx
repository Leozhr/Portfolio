'use client';
import { Project } from '@/components/Project';
import { theme } from '@/styles';
import Link from 'next/link';
import styled from 'styled-components';

const ProjectsStyle = styled.header`
  background: ${theme.color.dark};
  padding: 60px 0px;

  .title {
    font-size: 26px;
    text-align: center;
    color: ${theme.color.light};
    margin-bottom: 40px;

    span {
      color: ${theme.color.flare};
    }
  }

  .projects {
    border-top: 1px solid ${theme.color.hidden};
    border-bottom: 1px solid ${theme.color.hidden};
  }

  .all-projects {
    margin-top: 30px;
    display: flex;
    text-align: center;

    span {
      width: 100%; 
      color: ${theme.color.flare};
      font-size: 14px;
      text-decoration: underline;
    }
  }

  @media (min-width: 1027px) {
    background-color: ${theme.color.light};
    padding: 120px 0px;

    .title {
      font-size: 64px;
      font-weight: 600;
      color: ${theme.color.dark};
      margin-bottom: 80px;
    }

    .projects { border: none; }

    .all-projects { 
      span { 
        color: ${theme.color.dark}; 
        font-size: 28px; 
        transition: all 0.2s linear;
      } 
    }

    .all-projects span:hover {
      color: ${theme.color.flare};
    }
  }
`

const Projects = () => {
  return (
    <ProjectsStyle>
      <h1 className='title'>Meus <span>Projetos</span></h1>
      
      <div className='projects'>
        <Project
        href="https://iumovies.vercel.app/home/main"
        title="IUMovies"
        description="Angular, TypeScript & CSS"
        src="/images/projects/project-01.png"
        skills={['Angular', 'TypeScript', 'CSS']} />
      </div>

      <Link href="/project" className='all-projects'>
        <span>Ver todos os Projetos</span>
      </Link>

    </ProjectsStyle>
  ) 
}

export { Projects };

