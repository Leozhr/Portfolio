import { theme } from '@/styles';
import Image from 'next/image';
import styled from 'styled-components';

const CardStyle = styled.header`
  border: 1px solid ${theme.color.detail};
  border-radius: 12px;

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
        font-size: 24px;
        font-weight: 400;
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

`

type CardProps = {
  title: string;
  description: string;
  icon: string;
}

const Card = ({	title, description, icon }: CardProps) => {
  return (
    <CardStyle>
      <div className='card'>
        <div className='card-icon'>
          <Image src={icon} height={20} width={20} alt={title} />
        </div>

        <div className='card-info'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </CardStyle>
  )
}

export { Card };

