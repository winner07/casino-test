import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { CasinoCard } from './components/CasinoCard';
import { BonusType } from '../../../types/bonus/bonusTypes';
import { LeftArrow } from '../svg/LeftArrow';
import { RightArrow } from '../svg/RightArrow';
import styles from './BonusCarousel.module.scss';

interface BonusCarouselProps {
  cards: BonusType[];
}

export function BonusCarousel({ cards }: BonusCarouselProps) {
  const [index, setIndex] = useState(0);
  const cardsInSlide = 5;
  const slidesCount = Math.ceil(cards.length / cardsInSlide);

  function handleSelect(selectedIndex: number) {
    setIndex(selectedIndex);
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      prevIcon={<LeftArrow />}
      nextIcon={<RightArrow />}
      className={styles.carousel}
    >
      {Array.from({ length: slidesCount }, (_, slideI) => (
        <Carousel.Item key={slideI}>
          <div className={styles.slide}>
            {cards.slice(slideI * cardsInSlide, slideI * cardsInSlide + cardsInSlide).map((card, i) => (
              <CasinoCard card={card} key={i} />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
