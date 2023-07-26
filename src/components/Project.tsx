import { theme } from '@/styles';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

const ProjectStyle = styled.header`
  border-bottom: 1px solid ${theme.color.hidden};

  h1 {
    color: ${theme.color.light};
    font-family: ${theme.font.family.jakarta};
    text-transform: uppercase;
    font-size: 18px;
  }

  p {
    color: ${theme.color.detail};
    font-size: 14px;
    font-weight: 500;
  }

  .project {
    padding: 20px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-icon {
      padding: 10px 10px 5px 10px;
      border: 1px solid ${theme.color.detail};
      border-radius: 50px;
      transition: all .5s;

      &-active {
        transform: rotate(180deg);
      }
    }
  }

  .block {
    overflow: hidden;
    transition: .3s all;
    filter: saturate(0);
    height: 0px;

    &-active {
      height: 200px;
      filter: saturate(1);
    }
  }
`

type ProjectProps = {
  href: string;
  title: string;
  description: string;
  src: string;
}

const Project = ({ href, title, description, src }: ProjectProps) => {
  const [ Active, setActive ] = useState(false);

  return (
    <ProjectStyle>
      <div className='project' onClick={() => setActive(!Active)}>
        <div className='project-info'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={`${Active ? 'project-icon-active' : ''} project-icon`}>
          <Image src="/images/up-arrow.svg" height={14} width={14} alt="Up Arrow" />
        </div>
      </div>

      <div className={`block ${Active ? 'block-active' : ''}`}>
        <Image src="/images/project-01.png" height={200} width={400} alt="Project"
        className='block-img' />
      </div>
    </ProjectStyle>
  )
}

export { Project };

