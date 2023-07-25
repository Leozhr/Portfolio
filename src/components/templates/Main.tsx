import styled from 'styled-components';

const MainStyle = styled.header`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #000;
  opacity: 0.3;
  z-index: 10;
  overflow: hidden;
`

interface MainProps {
  main: boolean;
}

const Main = ({ main }: MainProps) => {
  if (!main) return null;

  return (
    <MainStyle>
      <div>

      </div>
    </MainStyle>
  )
}

export { Main };

