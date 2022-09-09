import React from 'react';
import { useSelector } from 'react-redux'
import type { NextPage } from 'next';
import { BonusCarousel } from '../components/shared/BonusCarousel';
import styles from '../styles/Home.module.scss';
import type { RootState } from '../store/store';

const Home: NextPage = () => {
  const bonuses = useSelector((state: RootState) => state.bonuses);

  return (
    <div className={styles.container}>
      <BonusCarousel cards={bonuses} />
    </div>
  )
}

export default Home
