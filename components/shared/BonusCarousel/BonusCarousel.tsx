import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CasinoCard } from './components/CasinoCard';
import { BonusType } from '../../../types/bonus/bonusTypes';
import styles from './BonusCarousel.module.scss';
import { LeftArrow } from '../svg/LeftArrow';
import { RightArrow } from '../svg/RightArrow';

interface BonusCarouselProps {
  cards: BonusType[];
}

export function BonusCarousel({ cards }: BonusCarouselProps) {
  return (
    <div className={styles.carousel}>
      <div id="prev-slide-btn"><LeftArrow /></div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          prevEl: '#prev-slide-btn',
          nextEl: '#next-slide-btn'
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 15
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 28
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 28
          }
        }}
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            <CasinoCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="next-slide-btn"><RightArrow /></div>
    </div>
  );
}
