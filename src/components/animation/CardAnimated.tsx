import { theme } from '@/styles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Card from 'react-animated-3d-card';
import { styled } from 'styled-components';

const CardStyleAnimated = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &-svg {
      display: flex;
      padding: 30px;
      background: ${theme.color.dark};
      filter: invert(1);
      border-radius: 50px;
    }
  }

  .info {
    position: absolute;
    display: flex;
    gap: 20px;
    align-items: center;
    bottom: 30px;
    left: 30px;
  }

  .stack {
    background-color: ${theme.color.light};
    padding: 20px 30px;
    bottom: 30px;
    left: 30px;
    border-radius: 12px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 24px;
      font-weight: 600;
      color: ${theme.color.dark};
    }
  }

  .skills {
    display: flex;
    gap: 10px;

    span {
      padding: 8px 15px;
      background-color: ${theme.color.dark};
      font-weight: 600;
      font-size: 16px;
      color: ${theme.color.light};
      border-radius: 30px;
    }
  }
`

type CardProps = {
  src: string;
  title: string;
  skills?: Array<string>;
  href: string;
}

const CardAnimated = ({ title, skills, src, href }: CardProps) => {
  const router = useRouter();
  
  return (
    <Card    
        shineStrength={0.1}   
        style={{
        background: `url(${src}) no-repeat center`,
        width: '750px',
        height: '500px',
        margin: '0 0 80px 0',
        cursor: 'pointer',
        zIndex: '0'
      }}      
      onClick={() => router.push(href)}>
        <CardStyleAnimated>
          <div className='card'>
            <div className='card-svg'>
              <Image src="/images/arrow.svg" height={20} width={20} alt="Project Arrow" />
            </div>
          </div>

          <div className='info'>
            <div className='stack'>
              <h1>{title}</h1>
            </div>

            <div className='skills'>
              {skills ? skills.map(skill => (
                <span key={skill}>{skill}</span>
              )) : null }
            </div>
          </div>
        </CardStyleAnimated>
    </Card>
  )
}

export { CardAnimated };

