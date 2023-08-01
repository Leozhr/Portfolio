import { theme } from '@/styles';
import styled from 'styled-components';

const ProjectMainStyle = styled.div`
  padding: 60px 20px;
  background-color: ${theme.color.dark};

  h1 {
    color: ${theme.color.light};

    span {
      color: ${theme.color.detail};
    }
  }
`

const ProjectMain = () => {
  return (
    <ProjectMainStyle>
      <h1>Eu torno minhas <span>ideias</span> em <span>realidade</span></h1>
    </ProjectMainStyle>
  )
}

export { ProjectMain };

