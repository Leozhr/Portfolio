import { Card } from '@/components/Card';
import styled from 'styled-components';

const CardsStyle = styled.header`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px 50px;
`

const Cards = () => {
  return (
    <CardsStyle>
      <Card
        title="Qualidade"
        description="Comprometido em garantir que cada projeto atinja os mais altos padrões de excelência."
        icon="/images/quality.svg" />

      <Card
        title="Objetivo"
        description="Abordagem direta e objetiva, concentrado em entregar resultados de forma eficiente."
        icon="/images/objective.svg" />
        
      <Card
        title="Comunicação"
        description="Capaz de transmitir ideias de forma simples, promovendo uma colaboração eficaz em equipe."
        icon="/images/comunication.svg" />
    </CardsStyle>
  )
}

export { Cards };

