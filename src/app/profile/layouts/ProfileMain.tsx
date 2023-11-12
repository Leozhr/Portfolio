import { useWidthPage } from '@/functions/WidthPage';
import { theme } from '@/styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProfileMainStyle = styled.div`
  padding: 60px 20px 0px;
  background-color: ${theme.color.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  box-shadow: inset 0px -75px 0px 0px ${theme.color.light};
  
  h1 {
    color: ${theme.color.light};
    font-size: 26px;
    text-align: center;
    line-height: 28px;

    span {
      display: block;
      color: ${theme.color.detail};
    }
  }

  picture {
    img {
      border-radius: 120px;
      border: 1px solid ${theme.color.detail};
    }
  }

  @media (min-width: 1027px) {
  padding: 150px 20px 0px;
  background-color: ${theme.color.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  box-shadow: inset 0px -75px 0px 0px ${theme.color.light};
  
  h1 {
    color: ${theme.color.light};
    font-size: 62px;
    line-height: 72px;
    text-align: center;

    span {
      display: block;
      color: ${theme.color.detail};
    }
  }

  picture {
    img {
      border-radius: 200px;
      border: 1px solid ${theme.color.detail};
    }
  }
  }
`

const ProfileMain = () => {
  const widthPage = useWidthPage();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (widthPage <= 1027) {
      setWidth(150)
    } else {
      setWidth(250)
    }
  }, [widthPage])

  return (
    <ProfileMainStyle>
        <h1>Desenvolvedor <span>FullStack</span></h1>

        <picture>
          <Image src="/images/leonardo.png" height={width} width={width} alt="Profile"
          className="img" />
        </picture>
    </ProfileMainStyle>
  )
}

export { ProfileMain };

