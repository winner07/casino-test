import { createSlice } from '@reduxjs/toolkit'
import { BonusType } from '../../types/bonus/bonusTypes';

const initialState: BonusType[] = [
  {
    logo: '/images/ozwin-casino.png',
    title: 'Ozwin Casino -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,000',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: '/images/fair-go-casino.png',
    title: 'Fair Go -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$8,888',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: '/images/hell-spin-casino.png',
    title: 'Hell Spin Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,400',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: '/images/bizzo-casino.png',
    title: 'Bizzo Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$5,555',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: '/images/ozwin-casino.png',
    title: 'Ozwin Casino -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,000',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: '/images/fair-go-casino.png',
    title: 'Fair Go -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$8,888',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: '/images/hell-spin-casino.png',
    title: 'Hell Spin Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,400',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: '/images/bizzo-casino.png',
    title: 'Bizzo Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$5,555',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: '/images/ozwin-casino.png',
    title: 'Ozwin Casino -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,000',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: '/images/fair-go-casino.png',
    title: 'Fair Go -Review',
    isExclusive: true,
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$8,888',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: '/images/hell-spin-casino.png',
    title: 'Hell Spin Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$4,400',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  },
  {
    logo: '/images/bizzo-casino.png',
    title: 'Bizzo Casino -Review',
    type: 'No deposit bonus',
    bonusUp: 400,
    bonusValue: '$5,555',
    bonusPlus: '+ 100 Free Spins',
    bonusGame: 'on Cleopatra’s Gold'
  }
]

export const bonusesSlice = createSlice({
  name: 'bonuses',
  initialState,
  reducers: {}
});

export default bonusesSlice.reducer;
