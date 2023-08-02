import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { theme } from '@/styles';
import 'swiper/css';
import { ProfileTab } from './utils/ProfileTab';

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

const ProfileExperience = () => {
  return (
    <ProfileExperienceStyle>
      <div className='title'>
        <h1>Minhas <span>Experiencias</span></h1>
      </div> 

      <Swiper
      spaceBetween={-60}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide>
        <ProfileTab
        startDate='Jan 2023'
        endDate='Atualmente'
        title='LeArt'
        description='A LeArt foi fundada com o propósito de desenvolver sites e plataformas funcionais, através de trabalhos freelancer voluntários e remunerados, visando adquirir experiência na área de desenvolvimento.' />
      </SwiperSlide>
      <SwiperSlide>
      <ProfileTab
        startDate='Jan 2023'
        endDate='Atualmente'
        title='LeArt'
        description='A LeArt foi fundada com o propósito de desenvolver sites e plataformas funcionais, através de trabalhos freelancer voluntários e remunerados, visando adquirir experiência na área de desenvolvimento.' />
      </SwiperSlide>
      <SwiperSlide>
      <ProfileTab
        startDate='Jan 2023'
        endDate='Atualmente'
        title='LeArt'
        description='A LeArt foi fundada com o propósito de desenvolver sites e plataformas funcionais, através de trabalhos freelancer voluntários e remunerados, visando adquirir experiência na área de desenvolvimento.' />
      </SwiperSlide>
    </Swiper>
    </ProfileExperienceStyle>
  )
}

export { ProfileExperience };

