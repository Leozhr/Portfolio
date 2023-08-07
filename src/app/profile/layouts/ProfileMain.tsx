import { theme } from '@/styles';
import Image from 'next/image';
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
`

const ProfileMain = () => {
  return (
    <ProfileMainStyle>
        <h1>Desenvolvedor <span>FullStack</span></h1>

        <picture>
          <Image src="/images/leonardo.png" height={150} width={150} alt="Profile"
          className="img" />
        </picture>
    </ProfileMainStyle>
  )
}

export { ProfileMain };

