import { theme } from "@/styles";
import styled from "styled-components";

const AboutStyle = styled.div`
  height: 50vh;
  background: ${theme.color.dark};
`

const About = () => {
  return (
    <AboutStyle>
      <h1>About</h1>
    </AboutStyle>
  )
}

export { About };

