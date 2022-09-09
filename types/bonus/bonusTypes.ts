import { StaticImageData } from 'next/image';

export interface BonusType {
  logo: string | StaticImageData;
  title: string;
  isExclusive?: boolean;
  type: string;
  bonusUp: number;
  bonusValue: string;
  bonusPlus: string;
  bonusGame: string;
}
