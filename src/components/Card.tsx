'use client';
import { useWidthPage } from '@/functions/WidthPage';
import { theme } from '@/styles';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image';
import styled from 'styled-components';

const CardStyle = styled.header`
  border: 1px solid ${theme.color.detail};
  border-radius: 12px;
  background-color: white;

  .card {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 50px;

    &-icon {
      padding: 15px 15px 10px 15px;
      border: 1px solid ${theme.color.detail};
      border-radius: 30px;
      width: max-content;
    }

    &-info {
      h1 {
        font-size: 22px;
        font-weight: 500;
        font-family: ${theme.font.family.jakarta};
        text-transform: uppercase;
      }

      p {
        font-family: ${theme.font.family.jakarta};
        margin-top: 5px;
        font-size: 14px;
        line-height: 24px;
        color: ${theme.color.detail};
      }
    }
  }

  @media (min-width: 1027px) {
    .card {
      min-height: 350px;
      cursor: grab;

      &:active {
        cursor: grabbing;
      }

      &-info {
      h1 {
        font-size: 24px;
        font-weight: 600;
      }

      p {
        margin-top: 10px;
        font-family: ${theme.font.family.poppins};
        font-size: 18px;
        line-height: 28px;
        color: ${theme.color.flare};
      }
    }
    }
  }
`

type CardProps = {
  title: any;
}

const Card = ({	title }: CardProps) => {
  const widthPage = useWidthPage();
  
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: title.id
  })

  const styledCard = {
    transform: CSS.Transform.toString(transform),
  }

  return (
    <div>
    {widthPage > 1650 && <div ref={setNodeRef} {...attributes} {...listeners} style={styledCard}>
      <CardStyle>
        <div className='card'>
          <div className='card-icon'>
            <Image src={title.icon} height={20} width={20} alt={title.name} />
          </div>
    
          <div className='card-info'>
            <h1>{title.name}</h1>
            <p>{title.description}</p>
          </div>
        </div>
      </CardStyle>
    </div>}

    {widthPage <= 1650 && 
      <CardStyle>
        <div className='card'>
          <div className='card-icon'>
            <Image src={title.icon} height={20} width={20} alt={title.name} />
          </div>
    
          <div className='card-info'>
            <h1>{title.name}</h1>
            <p>{title.description}</p>
          </div>
        </div>
      </CardStyle>}
    </div>
  )
}

export { Card };

