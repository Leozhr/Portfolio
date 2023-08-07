import { theme } from '@/styles';
import styled from 'styled-components';

import 'swiper/css';

const ProfileCarrosselStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .category {
    width: 300px;
    padding: 40px 30px;
    border-radius: 12px;
    border: 1px solid ${theme.color.flare};
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 15px;

    span {
      font-size: 14px;
      color: ${theme.color.hidden};
    }

    h1 {
      font-size: 26px;
      font-weight: 600;
    }

    p {
      font-size: 12px;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &-items {
      display: flex;
      gap: 10px;

      span {
        padding: 3px 10px;
        background-color: ${theme.color.light};
        border-radius: 360px;
        border: 1px solid ${theme.color.detail};
      }
    }
  }

  @media (min-width: 1027px) {
  width: 350px;

  .category {
    span {
      font-size: 16px;
    }

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }
  }
  }
`

type ProfileCarrosselProps = {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
}

const ProfileTab = ({ startDate, endDate, title, description }: ProfileCarrosselProps) => {
  return (
    <ProfileCarrosselStyle>
      <div className='category'>
        <span>{startDate} - {endDate}</span>
        <h1>{title}</h1>

        <div className='card'>
          <div className='card-items'>
            <span>Design</span>
            <span>Desenvolvimento</span>
          </div>

          <p>{description}</p>
        </div>
      </div>
    </ProfileCarrosselStyle>
  )
}

export { ProfileTab };

