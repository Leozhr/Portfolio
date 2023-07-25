import { theme } from '@/styles';
import styled from 'styled-components';

const TitleStyle = styled.header`
  h1 {
    color: ${theme.color.light};
  }
`

type TitleProps = {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <TitleStyle>
      <h1>{text}</h1>
    </TitleStyle>
  )
}

export { Title };

