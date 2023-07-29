'use client';
import { Card } from '@/components/Card';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import styled from 'styled-components';

const CardsStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px 50px;
  overflow-x: hidden;

  @media (min-width: 1027px) {
    padding: 120px 15%;
  }

  @media (min-width: 1440px) {
    padding: 160px 20%;
    flex-direction: row; 
  }
`

const Cards = () => {
  const [ title, setTitle ] = useState([
    { 
      id: 1,
      name: 'Qualidade', 
      description: 'Comprometido em garantir que cada projeto atinja os mais altos padrões de excelência.',
      icon: '/images/quality.svg', 
    },
    { 
      id: 2,
      name: 'Objetivo', 
      description: 'Abordagem direta e objetiva, concentrado em entregar resultados de forma eficiente.',
      icon: '/images/objective.svg', 
    },
    { 
      id: 3,
      name: 'Comunicação', 
      description: 'Capaz de transmitir ideias de forma simples, promovendo uma colaboração eficaz em equipe.',
      icon: '/images/comunication.svg', 
    },
  ]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    setTitle((title) => {
      const oldIndex = title.findIndex((item) => item.id === active.id);
      const newIndex = title.findIndex((item) => item.id === over.id);

      return arrayMove(title, oldIndex, newIndex);
    })
  }

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <CardsStyle>
        <SortableContext items={title} strategy={horizontalListSortingStrategy}>
          <Card title={title[0]} />
          <Card title={title[1]} />
          <Card title={title[2]} />
        </SortableContext>
      </CardsStyle>
    </DndContext>
  )
}

export { Cards };

