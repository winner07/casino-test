import React from 'react';
import type { NextPage } from 'next';
import { BonusCarousel } from '../components/shared/BonusCarousel';
import { BonusType } from '../types/bonus/bonusTypes';
import ripperImg from '../public/images/ripper-casino.png';
import ozwinImg from '../public/images/ozwin-casino.png';
import fairGoImg from '../public/images/fair-go-casino.png';
import hellSpinImg from '../public/images/hell-spin-casino.png';
import bizzoImg from '../public/images/bizzo-casino.png';
import styles from '../styles/Home.module.scss';

const bonusCards: BonusType[] = [
  {
    logo: ripperImg,
    title: 'Ripper Casino -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$2,000',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: ozwinImg,
    title: 'Ozwin Casino -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,000',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: fairGoImg,
    title: 'Fair Go -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$8,888',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: hellSpinImg,
    title: 'Hell Spin Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,400',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: bizzoImg,
    title: 'Bizzo Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$5,555',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: ripperImg,
    title: 'Ripper Casino -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$2,000',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: ozwinImg,
    title: 'Ozwin Casino -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,000',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: fairGoImg,
    title: 'Fair Go -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$8,888',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: hellSpinImg,
    title: 'Hell Spin Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,400',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: bizzoImg,
    title: 'Bizzo Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$5,555',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: ripperImg,
    title: 'Ripper Casino -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$2,000',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: ozwinImg,
    title: 'Ozwin Casino -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,000',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: fairGoImg,
    title: 'Fair Go -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$8,888',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: hellSpinImg,
    title: 'Hell Spin Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,400',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: bizzoImg,
    title: 'Bizzo Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$5,555',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  }
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <BonusCarousel cards={bonusCards} />
    </div>
  )
}

export default Home
