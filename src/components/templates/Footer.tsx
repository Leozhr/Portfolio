import { theme } from '@/styles';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const FooterStyle = styled.header`
  padding: 80px 0px 0px 0px;

  footer {
    background: ${theme.color.dark};
    position: relative;

    .contact {
      border-top: 1px solid ${theme.color.detail};
      border-bottom: 1px solid ${theme.color.detail};
      display: flex;
      align-items: center;
      justify-content:center ;
      gap: 10px;
      cursor: pointer;

      h1 {
        padding: 15px 0px;
        color: ${theme.color.light};
        font-family: ${theme.font.family.jakarta};
        text-transform: uppercase;
        font-size: 18px;
        text-align: center;
      }
    }

    .copyright {
      padding: 30px 15px 40px 15px;
      display: flex;
      justify-content: center;

      &-icons {
        display: flex;
        gap: 20px;
      }
    }

    .social {
      background-color: ${theme.color.hidden};
      padding: 8px;
      display: flex;
      border-radius: 50px;
    }
  }
`

const Footer = () => {
  const returnOnTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <FooterStyle>
      <footer>
        <div className='contact' onClick={returnOnTop}>
          <h1>retornar ao topo</h1>
          <Image src="/images/up-arrow.svg" height={20} width={20} alt="return" />
        </div>

        <div className='copyright'>
          <div className='copyright-icons'>
            <Link href='https://github.com/leoleal' className='social'>
              <Image src="/images/discord.svg" height={24} width={24} alt="Github" />
            </Link>

            <Link href='https://github.com/leoleal' className='social'>
              <Image src="/images/git.svg" height={24} width={24} alt="Github" />
            </Link>

            <Link href='https://github.com/leoleal' className='social'>
              <Image src="/images/linkedin.svg" height={24} width={24} alt="Github" />
            </Link>
          </div>
        </div>
      </footer> 
    </FooterStyle>
  )
}

export { Footer };

