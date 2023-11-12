import { useWidthPage } from '@/functions/WidthPage';
import { theme } from '@/styles';
import styled from 'styled-components';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProfileTab } from './utils/ProfileTab';

import 'swiper/css';
import 'swiper/css/pagination';

const ProfileExperienceStyle = styled.div`
  margin-bottom: 30px;

  .title {
    padding: 60px 0px 40px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: ${theme.color.dark};
      text-align: center;
      width: 20ch;
      line-height: 28px;
      font-size: 24px;

      span {
        color: ${theme.color.flare};
      }
    }
  }
`

const ProfileExperienceStyleDesktop = styled.div`
  margin-bottom: 30px;

  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 0px 15% 140px;
  }

  .title {
    padding: 160px 0px 80px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: ${theme.color.dark};
      text-align: center;
      width: 20ch;
      line-height: 28px;
      font-size: 62px;

      span {
        color: ${theme.color.flare};
      }
    }
  }
`

const ProfileExperience = () => {
  const widthPage = useWidthPage();

  return (
    <section>
      {widthPage <= 1027 && <ProfileExperienceStyle>
        <div className='title'>
          <h1>Minhas <span>Experiencias</span></h1>
        </div> 
      
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
        >
        <SwiperSlide>
          <ProfileTab
          startDate='Jan 2020'
          endDate='Dez 2021'
          title='Gerdau'
          description='Experiência como estágio em apontador de produção, atuando como eletrônica. Responsável pelo
          auxílio na manutenção de máquinas, incluindo o desenvolvimento de programação de robos e dados.
          ' />
        </SwiperSlide>
      </Swiper> 
      </ProfileExperienceStyle>}

      {widthPage > 1027 && <ProfileExperienceStyleDesktop>
        <div className='title'>
          <h1>Minhas <span>Experiencias</span></h1>
        </div>

        <div className='cards'>
        <ProfileTab
          startDate='Jan 2020'
          endDate='Dez 2021'
          title='Gerdau'
          description='Experiência como estágio em apontador de produção, atuando como eletrônica. Responsável pelo
          auxílio na manutenção de máquinas, incluindo o desenvolvimento de programação de robos e dados.' />
        </div>
      </ProfileExperienceStyleDesktop>}
    </section>
  )
}

export { ProfileExperience };

